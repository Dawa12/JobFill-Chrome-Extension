// sample job applications: https://boards.greenhouse.io/smartling/jobs/550007#.WOuqcRIrLdT
// https://jobs.lever.co/lever/99a3bf01-851f-4a53-aa2e-ede434a29e0c/apply

function fillPageFields() {
  // console.log('populating form fields!!!');

  chrome.storage.sync.get(null, function(items) {
    // console.log(`items stringify: ${JSON.stringify(items)}`);
    // console.log(`items.firstName: ${JSON.stringify(items.firstName)}`);

    $("input[name*='first']")
      .eq(0)
      .val(items.firstName);
    $("input[name*='last']")
      .eq(0)
      .val(items.lastName);
    $("input[name*='email']")
      .eq(0)
      .val(items.email);
    $("input[name*='phone']")
      .eq(0)
      .val(items.phone);
    $("input[name*='city']")
      .eq(0)
      .val(items.city);
    $("input[name*='location']")
      .eq(0)
      .val(items.city);

    // perform loop on all lables to programmatically select and relace text in value
    // match(/\b(attach)/i)
    // $( "label")[0].innerText.match(/\b(attach)/i)

    $("label:contains('salary')")
      .find("input[type='text']")
      .eq(0)
      .val(items.salary);
    $("label:contains('Linked')")
      .find("input[type='text']")
      .eq(0)
      .val(items.linkedin);
    $("label:contains('Website')")
      .find("input[type='text']")
      .eq(0)
      .val(items.website);

    $("label:contains('Github')")
      .find("input[type='text']")
      .eq(0)
      .val(items.github);

    $("label:contains('GitHub')")
      .find("input[type='text']")
      .eq(0)
      .val(items.github);

    $("label:contains('Portfolio')")
      .find("input[type='text']")
      .eq(0)
      .val(items.portfolio);

    $("label:contains('Twitter')")
      .find("input[type='text']")
      .eq(0)
      .val(items.twitter);

    $("label:contains('hear')")
      .find("input[type='text']")
      .eq(0)
      .val('LinkedIN');

    $("select[id*='gender']")
      .find(`option:contains(${items.gender})`)
      .prop('selected', true);

    $("select[id*='hispanic']")
      .find(`option:contains(${items.hispanic})`)
      .prop('selected', true);

    $("select[id*='veteran']")
      .find(`option:contains(${items.veteran})`)
      .prop('selected', true);

    $("select[id*='disability']")
      .find(`option:contains(${items.disability})`)
      .prop('selected', true);

    // can't seem to open file upload button automatically so will just highlight resume section
    $("div.field:contains('Resume')").css('background-color', 'lightblue');
  });
}

fillPageFields();

// If you ever need to clear your chrome storage just uncomment the line below!
// clearStorage()
function clearStorage() {
  chrome.storage.sync.clear(function() {
    console.log('clearing chrome storage');
    if (runtime.lastError) {
      console.log(`runtime.lastError: ${runtime.lastError}`);
    }
  });
}
