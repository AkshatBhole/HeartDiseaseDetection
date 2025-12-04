from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

from config import Config
from models.database import init_db

from routes.prediction_routes import prediction_bp
from routes.health_routes import health_bp
from utils.logger import setup_logger

def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)
    
    # Initialize CORS
    CORS(app)
    
    # Initialize DB
    init_db(app)
    
    # Setup Logger
    setup_logger()
    
    # Register Blueprints
    app.register_blueprint(prediction_bp)  # no url_prefix
    app.register_blueprint(health_bp) 
    
    return app

if __name__ == '__main__':
    app = create_app()
    app.run(host='0.0.0.0', port=5000)
