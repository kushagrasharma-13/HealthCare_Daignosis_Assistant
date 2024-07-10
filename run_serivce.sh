cd backend
nohup python manage.py runserver 0.0.0.0:8000 &
cd ../frontend
nohup npm run dev &
cd ..