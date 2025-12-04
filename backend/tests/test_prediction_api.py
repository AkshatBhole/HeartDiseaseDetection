import pytest
from backend.app import create_app
from backend.models.database import db

@pytest.fixture
def client():
    app = create_app()
    app.config['TESTING'] = True
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'
    
    with app.test_client() as client:
        with app.app_context():
            db.create_all()
        yield client

def test_health_check(client):
    rv = client.get('/api/health')
    assert rv.status_code == 200
    assert rv.json['status'] == 'ok'

def test_predict_mock(client):
    # This test assumes models might not be present, so it checks for either success (mock) or failure handled gracefully
    # We'll send some dummy data
    data = {
        'age': 60, 'sex': 1, 'cp': 0, 'trestbps': 140, 'chol': 260, 'fbs': 0, 
        'restecg': 1, 'thalach': 140, 'exang': 1, 'oldpeak': 2.5, 'slope': 1, 
        'ca': 0, 'thal': 2
    }
    rv = client.post('/api/predict', json=data)
    # Since we have a mock fallback, it should return 200
    assert rv.status_code == 200
    assert rv.json['success'] == True
