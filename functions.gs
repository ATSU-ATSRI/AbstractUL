function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('upload.html');
}

function uploadFiles(form) {

  try {

    var filebox = "Abstracts-Inbox";
    var folder, folders = DriveApp.getFoldersByName(filebox);
    var d = new Date();
       var curr_date = d.getDate();
       var curr_month = d.getMonth() + 1;
       var curr_year = d.getFullYear();
       var timeStamp = curr_year + "." + curr_month + "." + curr_date;

    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      folder = DriveApp.createFolder(filebox);
    }

    var blob = form.myFile;
    var file = folder.createFile(blob);
    var fileName = file.getName();
    file.setName(timeStamp + "_" + form.myClassification + "_" + form.myAbstract + "_" + fileName);
    file.setDescription("Author : " + form.myAuthors + "\n\nCorresponding Author : " + form.myCorrespondingAuthors + " " + form.myCorrespondingAuthorsEmail + "\n\nPresenting Author(s) : " + form.myPresentingAuthors + "\n\nResponsible Author : " + form.myResponsibleAuthors + " " + form.myResponsibleAuthorsEmail + "\n\n" + form.myPermission);

    //This is the email notify action for when a submission happens.
    var notifyToEmail = 'EMAIL ADDRESS TO NOTIFY OF SUBMISSION';
    var notifyToCC = 'BACKUP EMAIL ADDRESS TO NOTIFY OF SUBMISSION';
    var notifySubject = 'Abstract Submission Notification';
    var notifyName = 'Abstract Submission Bot';
    var notifyBody = 'New Abstract submitted for review. \n \n'
                     + timeStamp + '_' + form.myClassification + '_' + form.myAbstract + '_' + fileName + ' \n '
                     + ' \n \n Have a nice day, \n   ~Abstract Submission Bot. \n ';
    var notifyHTML = notifyBody.replace(/\n/g, '<br />');

    MailApp.sendEmail({
      name: notifyName,
      to: notifyToEmail,
      cc: notifyToCC,
      subject: notifySubject,
      htmlBody: notifyHTML,
      body: notifyBody,
   });


  return "File was uploaded successfully, Thank you.";
  } catch (error) {

    return error.toString();
  }

}
