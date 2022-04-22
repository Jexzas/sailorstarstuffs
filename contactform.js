let existingCode = document.getElementById("about").innerHTML;
let replacementCode = `<section class="mb-4">

<!--Section heading-->
<div class="container w-100 override">
<h2 class="h1-responsive font-weight-bold text-center my-4">email me</h2>
<!--Section description-->
<p class="text-center w-responsive mx-auto mb-5">let me know in your email how I can help!</p>

<div class="row">

    <!--Grid column-->
    <div class="col-md-9 mx-auto">
        <form id="contact-form" name="contact-form" method="POST">

            <!--Grid row-->
            <div class="row">

                <!--Grid column-->
                <div class="col-md-6">
                    <div class="md-form mb-0">
                        <input type="text" id="personName" name="name" class="form-control">
                        <label for="name" class="">Your name</label>
                    </div>
                </div>
                <!--Grid column-->


            </div>
            <!--Grid row-->

            <!--Grid row-->
            <div class="row">
                <div class="col-md-12">
                    <div class="md-form mb-0">
                        <input type="text" id="subject" name="subject" class="form-control">
                        <label for="subject" class="">Subject</label>
                    </div>
                </div>
            </div>
            <!--Grid row-->

            <!--Grid row-->
            <div class="row">

                <!--Grid column-->
                <div class="col-md-12">

                    <div class="md-form">
                        <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                        <label for="message">Your message</label>
                    </div>

                </div>
            </div>
            <!--Grid row-->

        </form>

        <div class="text-center text-md-left">
            <a class="btn btn-primary" id="sendbox" onclick="emailForm()">Send</a>
        </div>
        <div class="status"></div>
    </div>
    <!--Grid column-->



</div>

</section>
</div>`;
let contactFormActive = false;
function becomeContactForm() {
    if (document.getElementById("about").innerHTML == existingCode) {
        console.log("originalpage");
        contactFormActive = true;
        document.getElementById("about").innerHTML = replacementCode;
    } else if (contactFormActive == true) {
        document.getElementById("about").innerHTML = existingCode;
        console.log("newpages");
        contactFormActive == false;
    } else {
        console.error("poop");
    }
}

function emailForm() {
    let personName = document.getElementById("personName").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;
    window.location.href = `mailto:snowhollandsilas@gmail.com?subject=${subject}&body=Hi, my name is ${personName} and I'm contacting you about ${subject}. ${message}`;
    becomeContactForm();
}