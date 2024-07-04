FROM python:3.11

# Set the working directory in the container
WORKDIR /backend

# Copy requirements file
COPY ./requirements.txt /backend/requirements.txt

# Install Python dependencies
RUN pip install --no-cache-dir --upgrade -r /backend/requirements.txt

# Copy the rest of the application code
COPY . .

EXPOSE 8000

# Debugging step: show files in the container
RUN ls -la

# Debugging step: show installed packages
RUN pip list

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
