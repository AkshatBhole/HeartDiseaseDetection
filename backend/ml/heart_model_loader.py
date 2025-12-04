import joblib
import os
import logging

logger = logging.getLogger(__name__)

BASE_DIR = os.path.dirname(os.path.dirname(__file__))
MODELS_DIR = os.path.join(BASE_DIR, "ml", "models")

class HeartModelLoader:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(HeartModelLoader, cls).__new__(cls)
            cls._instance.model = None
            cls._instance.scaler = None
            cls._instance.columns = None
            cls._instance.load_models()
        return cls._instance

    def load_models(self):
        try:
            model_path = os.path.join(MODELS_DIR, "knn_heart.pkl")
            scaler_path = os.path.join(MODELS_DIR, "scaler.pkl")
            columns_path = os.path.join(MODELS_DIR, "columns.pkl")

            if os.path.exists(model_path) and os.path.exists(scaler_path) and os.path.exists(columns_path):
                self.model = joblib.load(model_path)
                self.scaler = joblib.load(scaler_path)
                self.columns = joblib.load(columns_path)
                logger.info("Models loaded successfully.")
            else:
                logger.warning("Model files not found. Using mock data for development.")
                # Mock data for development if files are missing
                self.columns = ['age', 'sex', 'cp', 'trestbps', 'chol', 'fbs', 'restecg', 'thalach', 'exang', 'oldpeak', 'slope', 'ca', 'thal']
                self.model = None # Handle None in prediction service
                self.scaler = None
        except Exception as e:
            logger.error(f"Error loading models: {e}")
            raise e

    def get_model(self):
        return self.model

    def get_scaler(self):
        return self.scaler

    def get_columns(self):
        return self.columns

# Global instance
loader = HeartModelLoader()

def load_heart_model():
    return loader.get_model(), loader.get_scaler(), loader.get_columns()
