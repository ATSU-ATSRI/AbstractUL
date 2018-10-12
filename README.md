# AbstractUL
Upload to Google Drive script used for abstract submissions

# Use case.
A.T. Still Research Institute hosts the annual Interdisciplinary Biomedical Research Symposium. Each year the number of presenters has grown, yet the poster judging system has not kept pace. At the preceding year's symposium. We had issues not only with submissions getting lost in cluttered inboxes, but also an extensive the forwarding email chain of abstracts between the review team members. As the University already uses the Google Drive platform and most of the review team was familiar with the Google Drive platform, I wrote this upload/submission script. Switching to this process allowed us to save the staff sixty hours of processing time.


# Cite
Geoffroey-Allen Franklin. (2016, March 10). Abstract Upload Script (AbstractUL) (Version v1.0.0). Zenodo. http://doi.org/10.5281/zenodo.1461056

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.1461056.svg)](https://doi.org/10.5281/zenodo.1461056)


# Installation.
### Google Drive settings.
- In Google Drive create a folder to house your competition. 
  - In Google Drive, under this folder, create a folder with the current year (eg - 2016).
    - In Google Drive, Under this folder create a folder called Abstracts-Inbox.
- In Google Drive, select your competition folder.
  - In Google Drive, under this folder create a folder to house your scripts (eg - Script).
    - In Google Drive, in this folder, create a new Google Apps Script named Upload Script.
    - Open Upload Script.
    - Add a file called function.gs 
    - Copy function.gs from the repository
  - add a file called upload.html
    - Copy upload.html from the repository
      - This is the webpage you will be displaying to your competitors. Update the banner ad graphic and the Guidelines to match what you require.

### Update the function variables.
- Open Upload Script and update the vars in function.gs
  - filebox - This is the name of the Google Drive folder where the submissions will go.
  - notifyToEmail - This is the primary email address you want to be notified of submissions. We used a Slack email address here.
  - notifyToCC - This is a backup email address. We used a staff member's email address here.
- optional vars
  - notifySubject - Email subject line for the notification email.
  - notifyName - Email from name.
  - notifyBody - The text of the email. We wanted to match emails to the filenames in the Google Drive.

### Publish your changes.
- In Google Apps Script, select publish. 
- Set the Version to New. 
- Set 'execute the app as' to your user.
  - Note: You do have to Authorise the app before it will run correctly.
- Set 'Who has access to the app' as required. (We used Anyone to allow non Google users to submit abstracts.)
- Click Update.
- You'll get a URL link that points to the upload.html file, paste that into your website announcing the competition.


# Hints and Tips.
- Using a top level container for the competition will allow you to reuse this script on next-year's competition. All you have to do is add a new folder for the year, and a new Abstract-Inbox folder under that year's folder and the script will advance to the current year.
- Every time you change the Upload Script file, you must publish the app as New again or you won't publish the changes.
- The Google user who creates the App Script will need to also own the Abstracts-Inbox folder.
