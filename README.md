# Loki + k6: "Produce logs and query them" hands-on

## Create a Grafana Cloud stack

Create a Grafana Cloud Free account. **No credit card** required.

## Save credentials for k6

We will save all informations needed to write to Loki in k6

Log into your [Grafana.com account](https://grafana.com/auth/sign-in/) to find and create relevant informations
In another tab, open your Grafana.

- Click on *Details* next to Loki to see all details.
- Create an API Token by clicking on *Generate now*
- In Grafana, copy-paste it into your k6 > Settings > Environnement variables as `LOKITOKEN`
- Copy paste the domain name of your Loki cluster
- In Grafana, save it **without the https://** into a new k6 variables as `LOKIURL` (ex: logs-prod-012.grafana.net)
- Find the user for your Loki cluster just under the URL. It should be a number (ex: 123456)
- In Grafana, save it into a new k6 variables as `LOKIUSER`

## Create the k6 scripts

Create a new project in Grafana Cloud k6, and start editing the script
Copy paste the provided script: `load-test.js` and save

## Run the test

Let the test run for few minutes

## Find your data in Loki

> Be careful of the time interval you are querying, otherwise you could be looking at a time where you have no data to show

Go to Explore in Grafana, and select the Loki datasource called `grafanacloud-mystack-logs`. Select the label `foo` and value `bar`, then run the query. You should see some logs now.

## Play with Explore mode

Open a log line from the previous query. You can see the content, but in the structured result, you only have the labels (app and foo). You can't use the content as key/value pairs.

The LogQL builder is giving you a hint: "Add a logfmt parser". Click on it and run the query. Open one of the log line. You should now see the content as a key/value pair. logfmt is `key=value otherkey=othervalue` format. The builder caught it from the results and told you he can give you actionable results. Now it gives you another hint: "Add label filter" click on it and set Label as VirtualUserID and value as 5, then run the query.

Looking at the result, you can only see log lines with this VirtualUserID.

**You successfully queried, parsed and filtered logs that were not fully indexed.**
Now let's look at more advanced use case and Logs to Metrics cases.

---

# Let's create a heart on the map of London

Create a new test in k6 using the `lokiheart.js` and run it.

While it run, import the dashboard `lokiheart.json` and select your own Loki datasource.

Once the run is complete, you should see a red heart made of circles on London !