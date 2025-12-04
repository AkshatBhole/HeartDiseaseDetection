import pandas as pd
import json
from models.database import db
from models.prediction import Prediction
from ml.heart_model_loader import load_heart_model
import logging

logger = logging.getLogger(__name__)

def make_prediction(data):
    model, scaler, columns = load_heart_model()
    
    if model is None:
        # Mock prediction for development
        logger.warning("Using mock prediction")
        return {
            "prediction_raw": 0,
            "prediction_label": "Low Risk (Mock)",
            "probability": 0.1,
            "details": "Model files not found, returning mock result."
        }

    try:
        # Create DataFrame with correct column order
        df = pd.DataFrame([data], columns=columns)
        
        # Scale features
        X_scaled = scaler.transform(df)
        
        # Predict
        prediction_raw = int(model.predict(X_scaled)[0])
        
        # Probability (if available)
        probability = None
        if hasattr(model, "predict_proba"):
            probability = float(model.predict_proba(X_scaled)[0][1]) # Probability of class 1
        
        prediction_label = "High Risk" if prediction_raw == 1 else "Low Risk"
        
        # Save to DB
        save_prediction(data, prediction_label, prediction_raw, probability)
        
        return {
            "prediction_raw": prediction_raw,
            "prediction_label": prediction_label,
            "probability": probability,
            "details": "Prediction successful."
        }
    except Exception as e:
        logger.error(f"Prediction error: {e}")
        raise e

def save_prediction(input_data, label, raw, prob):
    try:
        prediction = Prediction(
            input_features=json.dumps(input_data),
            prediction_label=label,
            prediction_raw=raw,
            probability=prob
        )
        db.session.add(prediction)
        db.session.commit()
    except Exception as e:
        logger.error(f"Error saving prediction to DB: {e}")
        db.session.rollback()

def get_prediction_history():
    predictions = Prediction.query.order_by(Prediction.created_at.desc()).limit(50).all()
    return [p.to_dict() for p in predictions]
