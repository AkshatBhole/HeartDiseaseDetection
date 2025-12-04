from flask import Blueprint, jsonify
from ml.heart_model_loader import load_heart_model

health_bp = Blueprint('health', __name__)

@health_bp.route('/api/health', methods=['GET'])
def health_check():
    model, _, _ = load_heart_model()
    status = "ok"
    model_status = "loaded" if model is not None else "not_loaded"
    return jsonify({"status": status, "model_status": model_status})
