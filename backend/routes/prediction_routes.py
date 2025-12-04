from flask import Blueprint, request, jsonify
from services.prediction_service import make_prediction, get_prediction_history
from utils.validators import validate_prediction_input
from ml.heart_model_loader import load_heart_model

prediction_bp = Blueprint('prediction', __name__)

@prediction_bp.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    _, _, columns = load_heart_model()
    
    is_valid, error = validate_prediction_input(data, columns)
    if not is_valid:
        return jsonify({"success": False, "error": error}), 400
        
    try:
        result = make_prediction(data)
        return jsonify({"success": True, **result})
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500

@prediction_bp.route('/predictions', methods=['GET'])
def history():
    try:
        history = get_prediction_history()
        return jsonify({"success": True, "data": history})
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500

@prediction_bp.route('/columns', methods=['GET'])
def get_columns():
    _, _, columns = load_heart_model()
    return jsonify({"success": True, "columns": columns})
