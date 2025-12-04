def validate_prediction_input(data, required_columns):
    if not data:
        return False, "No input data provided"
    
    missing_columns = [col for col in required_columns if col not in data]
    if missing_columns:
        return False, f"Missing columns: {', '.join(missing_columns)}"
    
    # Basic type validation (can be expanded)
    for col in required_columns:
        if not isinstance(data[col], (int, float)):
             return False, f"Invalid type for column {col}: expected number"
             
    return True, None
