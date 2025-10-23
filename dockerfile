FROM python:3.11

ENV PIP_PROGRESS_BAR=off
# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the requirements.txt file into the container
COPY requirements.txt .

# Step 4: Install the dependencies
RUN pip install --upgrade pip && pip install -r requirements.txt

# Step 5: Copy the rest of the application code into the container
COPY . .

EXPOSE 10003
# Step 6: Set the default command to run your application
# Modify this part according to how you want to run your app
CMD ["python", "app.py"]