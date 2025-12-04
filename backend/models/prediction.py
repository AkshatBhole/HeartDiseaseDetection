from datetime import datetime
from .database import db

class Prediction(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    input_features = db.Column(db.Text, nullable=False)  # Storing as JSON string
    prediction_label = db.Column(db.String(50), nullable=False)
    prediction_raw = db.Column(db.Integer, nullable=False)
    probability = db.Column(db.Float, nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    user_id = db.Column(db.String(100), nullable=True)

    def to_dict(self):
        return {
            'id': self.id,
            'input_features': self.input_features,
            'prediction_label': self.prediction_label,
            'prediction_raw': self.prediction_raw,
            'probability': self.probability,
            'created_at': self.created_at.isoformat(),
            'user_id': self.user_id
        }
