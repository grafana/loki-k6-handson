# Loki logs producer hands-on

## Create a Grafana Cloud stack

Nothing special, let's go

## Save credentials for k6

We will save all informations needed to write to Loki in k6

- Create an API Token (Admin or Metrics Publisher)
- Copy Paste it into your k6 > Environnement variables as `LOKITOKEN`
- Find the URL of your Loki cluster
- Save it into a new k6 variables as `LOKIURL`
- Find the user for your Loki cluster
- Save it into a new k6 variables as `LOKIUSER`

## Create the k6 scripts

Create a new project in Grafana Cloud k6, and start editing the script

Copy paste the provided script: load-test.js

## Run the test
