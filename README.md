<<<<<<< HEAD
# Heart Disease Detection Web App

A production-ready web application for heart disease detection using a KNN model.

## Project Structure

```
project-root/
  backend/          # Flask Backend
  frontend/         # React + Vite Frontend
```

## Setup Instructions

### Prerequisites
- Python 3.8+
- Node.js 16+

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Place your model files in `backend/ml/models/`:
   - `knn_heart.pkl`
   - `scaler.pkl`
   - `columns.pkl`
   
   *Note: The app uses mock data if these files are missing.*

5. Run the application:
   ```bash
   python app.py
   ```
   The API will be available at `http://localhost:5000`.

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`.

## Features
- **Prediction**: Enter health metrics to get a risk assessment.
- **History**: View past predictions.
- **Responsive Design**: Works on desktop and mobile.
- **Animations**: Smooth transitions and interactive elements.

## API Endpoints
- `POST /api/predict`: Submit prediction data.
- `GET /api/predictions`: Get prediction history.
- `GET /api/health`: Health check.
- `GET /api/columns`: Get required input columns.
=======
# HeartDiseaseDetection
>>>>>>> 562f9624ade7d1cf33b9a7c684a1db13c90f1f97
