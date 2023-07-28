# Loki logs producer hands-on

## Create a Grafana Cloud stack

Create a Grafana Cloud Free account. **No credit card** required.

## Save credentials for k6

We will save all informations needed to write to Loki in k6

Log into your [Grafana.com account](https://grafana.com/auth/sign-in/) to find and create relevant informations
In another tab, open your Grafana.

- Create an API Token. The link to the menu is on the left: Security > API Tokens. Use *Admin* or *Metrics Publisher*
- In Grafana, copy-paste it into your k6 > Environnement variables as `LOKITOKEN`
- Go back to the overview of your stack (click on its name on the left). Find the URL of your Loki cluster by clicking on *Details*
- In Grafana, save it **without the https://** into a new k6 variables as `LOKIURL` (ex: logs-prod-012.grafana.net)
- Find the user for your Loki cluster just under the URL. It should be some numbers
- In Grafana, save it into a new k6 variables as `LOKIUSER`

## Create the k6 scripts

Create a new project in Grafana Cloud k6, and start editing the script
Copy paste the provided script: load-test.js and save

## Run the test
