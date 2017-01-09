This app helps cyclists find safe bike racks in their proximity. A user can search a location (currently only in Seattle) and it will show the closest bike racks. The racks are color-coded according to how many bike thefts have occurred within 100 meters.

All of the data in this project comes from Seattle's open data stored in Socrata's databases. Because it is government data, it only reflects the bike racks owned by the government. If a user would like to add a privately owned bike rack, s/he may do so.

Additionally, the theft data is updated weekly by a cron job that grabs data using Socrata's API and deletes data from Rack-It's server if it is more than a year old.
