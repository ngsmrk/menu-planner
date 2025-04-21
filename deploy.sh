#!/bin/bash

# Check if GOOGLE_API_KEY is set
if [ -z "$GOOGLE_API_KEY" ]; then
  echo "Error: GOOGLE_API_KEY environment variable is not set."
  exit 1
fi

# This script is used to deploy the application to a server.
echo "Starting deployment..."

gcloud run deploy menu-planner --project interview-prepper-41ae1 --source . \
  --region europe-west1 \
  --allow-unauthenticated \
  --platform managed \
  --set-env-vars GOOGLE_API_KEY=$GOOGLE_API_KEY
if [ $? -ne 0 ]; then
  echo "Deployment failed"
  exit 1
fi

echo "Deployment completed"
echo "Listing deployed services..."
gcloud run services list --project interview-prepper-41ae1 --region europe-west1
