#!/bin/bash

# This script is used to deploy the application to a server.
echo "Starting deployment..."#!/bin/bash

echo "Starting deployment..."
gcloud run deploy menu-planner --project interview-prepper-41ae1 --source . \
  --region europe-west1 \
  --allow-unauthenticated \
  --platform managed
if [ $? -ne 0 ]; then
  echo "Deployment failed"
  exit 1
fi

echo "Deployment completed"
echo "Listing deployed services..."
gcloud run services list --project interview-prepper-41ae1 --region europe-west1
