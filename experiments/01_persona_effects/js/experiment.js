// set up experiment logic for each slide
function make_slides(f) {
  var slides = {};





  // set up initial slide
  slides.i0 = slide({
    name: "i0",
    start: function() {
      exp.startT = Date.now();
    }
  });




// NOTES: still need to get cond in debug mode [DONE]; need to fix end of intro slide [DONE]; need to get fillers interleaved with critical trials; can I get the slide count to match the trial count?; would be good to get red boxes and red messages up on training trials [DONE]; get everything centered [DONE]








  // set up instructions slide
  slides.instructions = slide({
    name: "instructions",
    start: function() {
      document.onkeydown = checkKey;
      function checkKey(e) {
        e = e || window.event;
       if (e.keyCode==32){
        _s.button();
        }
      }
    },
    button: function() {
      exp.go();
    }
  });













  // set up the intro slide
  slides.intro = slide({
    name: "intro",
    present: exp.intro,
    present_handle : function(stim) {
      $('.scenario').hide();
      $('.question').hide();
      $('.img').hide();
      $('.img_phone').hide();
      $('.questionintro').hide();
      $('.introtophone').hide();
      $('.spaceforsolution').hide();
      $('.space_msg').hide();
      $('.spacetostart').hide();

      // store stimulus data
      this.stim = stim;

      var scenario = stim.scenario;
      $(".scenario").html(scenario);
      var question = stim.question;
      $(".question").html(question);
      // var img1 = '<img src="images/'+stim.img1+'" style="height:400px">';
      // $(".img1").html(img1);
      var img = '<img src="images/'+stim.img+'" style="height:400px">';
      $(".img").html(img);
      var img_phone = '<img src="images/'+stim.img_phone+'" style="height:250px">';
      $(".img_phone").html(img_phone);

      var questionintro = stim.questionintro;
      $(".questionintro").html(questionintro);

      var introtophone = stim.introtophone;
      $(".introtophone").html(introtophone);

      var spaceforsolution = stim.spaceforsolution;
      $(".spaceforsolution").html(spaceforsolution);

      var spacetostart = stim.spacetostart;
      $(".spacetostart").html(spacetostart);

      var space_msg = stim.space_msg;
      $(".space_msg").html(space_msg);

      var spacetostart = stim.questionintro;
      $(".questionintro").html(questionintro);

      var allow_key_press = 0;

      console.log("question", question);
      console.log("scenario", scenario);

      $('.questionintro').show();
      $('.scenario').show();
      console.log("scenario", scenario);
      $('.img').show()
      setTimeout(function() {
        $('.introtophone').show()
        setTimeout(function() {
          $('.question').show()
          $('.img_phone').show()
          $('.spaceforsolution').show()
            allow_key_press = 1;
          }, 5000)
        }, 3000)

      document.onkeydown = checkKey;
      function checkKey(e) {
        e = e || window.event;
      if ((allow_key_press=="1") && (e.keyCode==32)){
        console.log("Press space")
        $('.space_msg').show()
        setTimeout(function() {
            $('.spacetostart').show()
          }, 3000)
      }
      if ($('.spacetostart').is(':visible') && (e.keyCode==32))
          _s.button();
    }

  },
      // handle click on "Continue" button
    button: function() {
        // this.log_responses();
        exp.go(); //use _stream.apply(this) if there is a list of "present" stimuli to rotate through
      }

  });















  // set up the first interim instructions slide
  slides.interim1 = slide({
    name: "interim1",
    start: function() {
      document.onkeydown = checkKey;
      function checkKey(e) {
        e = e || window.event;
       if (e.keyCode==32){
        _s.button();
        }
      }
    },
    button: function() {
      exp.go();
    }
  });
















  // set up slide for  training trials
  slides.training = slide({
    name: "training",
    present: exp.training,
    present_handle : function(stim) {
      $('.scenario').hide();
      $('.interlocutors').hide();
      $('.speech').hide();
      $('.phone').hide();
      $('.question').hide();
      $('.space_msg_all').hide();
      $('.message_f').hide();
      $('.message_j').hide();
      $('.phone_f').hide();
      $('.phone_j').hide();

      exp.response = null

      // store stimulus data
      this.stim = stim;

      var scenario = stim.scenario;
      $(".scenario").html(scenario);
      var question = stim.question;
      $(".question").html(question);
      var interlocutors = '<img src="images/bt.png" style="height:400px">';
      $(".interlocutors").html(interlocutors);
      var speech = '<img src="images/'+stim.speech+'" style="height:400px">';
      $(".speech").html(speech);
      var phone = '<img src="images/'+stim.phone+'" style="height:250px">';
      $(".phone").html(phone);

      var phone_f = '<img src="images/'+stim.phone_f+'" style="height:250px">';
      $(".phone_f").html(phone_f);
      var phone_j = '<img src="images/'+stim.phone_j+'" style="height:250px">';
      $(".phone_j").html(phone_j);

      var message_f = stim.message_f;
      $(".message_f").html(message_f);
      var message_j = stim.message_j;
      $(".message_j").html(message_j);

      var allow_key_press = 0;

      $('.scenario').show();
      console.log("scenario", scenario);
      setTimeout(function() {
        $('.interlocutors').show()
        setTimeout(function() {
          $('.interlocutors').hide()
          $('.speech').show()
          setTimeout(function() {
            $('.question').show()
            $('.phone').show()
            allow_key_press = 1;
          }, 3000)
        }, 3000)
      }, 4000);

      // var table_class = document.getElementById("stable");
      // console.log("table_class:", table_class.className)

      // document.onkeydown = checkKey;
      // function checkKey(e) {
      //   e = e || window.event;
      // if ((allow_key_press=="1") && (e.keyCode==70)){
      //   console.log("Press F")
      //   exp.response = "f"
      //   $('.space_msg').show()
      //   // _s.button();
      // } else if ((allow_key_press=="1") && (e.keyCode==74)){
      //   console.log("Press J")
      //   exp.response = "j"
      //   $('.space_msg').show()
      //   // _s.button();
      // } else if ($('.space_msg').is(':visible') && (e.keyCode==32))
      //     _s.button();
      // }

      document.onkeydown = checkKey;
      function checkKey(e) {
        e = e || window.event;
      if ((allow_key_press=="1") && (e.keyCode==70)){
        console.log("Press F")
        exp.response = "f"
        $('.message_j').hide();
        $('.message_f').show();
        $('.space_msg_all').show();
        $('.phone').hide();
        $('.phone_j').hide();
        $('.phone_f').show();
        // _s.button();
      } 
      if ((allow_key_press=="1") && (e.keyCode==74)){
        console.log("Press J")
        exp.response = "j"
        $('.message_f').hide();
        $('.message_j').show();
        $('.space_msg_all').show();
        $('.phone').hide();
        $('.phone_f').hide();
        $('.phone_j').show();
        // _s.button();
      } else if ($('.space_msg_all').is(':visible') && (e.keyCode==32))
          _s.button();
      }

    },

    // handle click on "Continue" button
    button: function() {
        this.log_responses();
        _stream.apply(this); //use _stream.apply(this) if there is a list of "present" stimuli to rotate through
    },

    // save response
    log_responses: function() {
      exp.data_trials.push({
        "item": this.stim.item,
        "slide_number_in_experiment": exp.phase, //exp.phase is a built-in trial number tracker
        "scenario": this.stim.scenario,
        "question":this.stim.question,
        "img_phone": this.stim.img_phone,
        "response": exp.response
      });
    },
  });


















  // set up slide with instructions for main experiment
  slides.startExp = slide({
    name: "startExp",
    start: function() {
      $('.space_msg_all').show()
      document.onkeydown = checkKey;
      function checkKey(e) {
        e = e || window.event;
       if (e.keyCode==32){
        _s.button();
        }
      }
    },
    button: function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });















  slides.trial = slide({
    name: "trial",

    present: exp.stimuli,
    present_handle : function(stim) {
      $('.scenario').hide();
      $('.interlocutors').hide();
      $('.speech').hide();
      $('.phone').hide();
      $('.question').hide();
      $('.space_msg_all').hide();

      exp.response = null

      // store stimulus data
      this.stim = stim;

      // console.log("interlocutors:", stim.interlocutors);

      // console.log("interlocutors:", exp.persona);

      // // var cond = exp.condition.pop();
      // exp.cond = exp.condition.pop();
      // console.log("condition:", exp.cond);

      // // var scenario = stim.scenario;
      // // $(".scenario").html(scenario);

      // // var question = stim.question;
      // // $(".question").html(question);

      // var scenario_id = "scenario_" + exp.persona;
      // console.log("scenario_id:", scenario_id)

      // var key = "scenario_" + exp.persona;
      // var scenario = stim[key];

      // //or

      // // var scenario = stim[`scenario_${exp.persona}`]


      // $(".scenario").html(scenario);
      // console.log("scenario:", scenario)

      // // $ is jquery; this is used to connect js to html; first .scenario is the html <div>; the second, after html, is the variable you've just created
      // // try a # rather than a . in the <div> part?
      // // stim.'scenario_ + exp.persona+' or something like that maybe?
      // // 


      // // var question = stim.question;
      // var question = stim[`question_${exp.persona}`];
      // $(".question").html(question);
      // console.log("question:", question)

      // var interlocutors = '<img src="images/'+exp.persona + '.png'+'" style="height:400px">';
      // $(".interlocutors").html(interlocutors);
      // console.log("interlocutors:", interlocutors)

      // var speech = '<img src="images/'+ stim.item + '_' + exp.persona + '.png'+'" style="height:400px">';
      // $(".speech").html(speech);
      // console.log("speech:", speech)

      // var phone = '<img src="images/'+ stim.item + '_' + exp.cond + '.png'+'" style="height:250px">';
      // $(".phone").html(phone);





      if (stim.domain != "filler") {

        console.log("interlocutors:", exp.persona);

        // var cond = exp.condition.pop();
        exp.cond = exp.condition.pop();
        console.log("condition:", exp.cond);

        // var scenario = stim.scenario;
        // $(".scenario").html(scenario);

        // var question = stim.question;
        // $(".question").html(question);

        var scenario_id = "scenario_" + exp.persona;
        console.log("scenario_id:", scenario_id)

        var key = "scenario_" + exp.persona;
        // var scenario = stim[key];
        exp.scenario = stim[key];

        //or

        // var scenario = stim[`scenario_${exp.persona}`]


        $(".scenario").html(exp.scenario);
        console.log("scenario:", exp.scenario)

        // $ is jquery; this is used to connect js to html; first .scenario is the html <div>; the second, after html, is the variable you've just created
        // try a # rather than a . in the <div> part?
        // stim.'scenario_ + exp.persona+' or something like that maybe?
        // 


        // var question = stim.question;
        exp.question = stim[`question_${exp.persona}`];
        $(".question").html(exp.question);
        console.log("question:", exp.question)

        var interlocutors = '<img src="images/'+exp.persona + '.png'+'" style="height:400px">';
        $(".interlocutors").html(interlocutors);
        console.log("interlocutors:", interlocutors)

        var speech = '<img src="images/'+ stim.item + '_' + exp.persona + '.png'+'" style="height:400px">';
        $(".speech").html(speech);
        console.log("speech:", speech)

        var phone = '<img src="images/'+ stim.item + '_' + exp.cond + '.png'+'" style="height:250px">';
        $(".phone").html(phone);
      } else {

          exp.cond = stim.condition;
          console.log("condition:", exp.cond);

          exp.scenario = stim.scenario;
          console.log("scenario:", exp.scenario)
          $(".scenario").html(exp.scenario);

          // $ is jquery; this is used to connect js to html; first .scenario is the html <div>; the second, after html, is the variable you've just created
          // try a # rather than a . in the <div> part?
          // stim.'scenario_ + exp.persona+' or something like that maybe?
          // 


          exp.question = stim.question;
          $(".question").html(exp.question);
          console.log("question:", exp.question)

          var interlocutors = '<img src="images/bt.png" style="height:400px">';
          $(".interlocutors").html(interlocutors);
          console.log("interlocutors:", interlocutors)

          var speech = '<img src="images/'+ stim.item + '_bt.png'+'" style="height:400px">';
          $(".speech").html(speech);
          console.log("speech:", speech)

          var phone = '<img src="images/' + 'phone_' + stim.item + '.png'+'" style="height:250px">';
          $(".phone").html(phone);
      }













      var allow_key_press = 0;

      $('.scenario').show();
      console.log("scenario", exp.scenario);
      setTimeout(function() {
        $('.interlocutors').show()
        setTimeout(function() {
          $('.interlocutors').hide()
          $('.speech').show()
          setTimeout(function() {
            $('.question').show()
            $('.phone').show()
            allow_key_press = 1;
          }, 3000)
        }, 3000)
      }, 4000);

      document.onkeydown = checkKey;
      function checkKey(e) {
        e = e || window.event;
      if ((allow_key_press=="1") && (e.keyCode==70)){
        console.log("Press F")
        exp.response = "f"
        $('.space_msg_all').show()
        // _s.button();
      } else if ((allow_key_press=="1") && (e.keyCode==74)){
        console.log("Press J")
        exp.response = "j"
        $('.space_msg_all').show()
        // _s.button();
      } else if ($('.space_msg_all').is(':visible') && (e.keyCode==32))
          _s.button();
      }

    },

    // handle click on "Continue" button
    button: function() {
        this.log_responses();
        _stream.apply(this); //use _stream.apply(this) if there is a list of "present" stimuli to rotate through
    },

    // save response
    log_responses: function() {
      exp.data_trials.push({
        "item": this.stim.item,
        "slide_number_in_experiment": exp.phase, //exp.phase is a built-in trial number tracker
        // "scenario": this.stim.scenario,
        // "question":this.stim.question,
        // "img_phone": this.stim.img_phone,
        "persona": exp.persona,
        // "scenario": this.stim[`scenario_${exp.persona}`],
        // "question":this.stim[`question_${exp.persona}`],
        "scenario": exp.scenario,
        "question": exp.question,
        "condition": exp.cond,

        "response": exp.response
      });
    }
  });






  // slide to collect subject information
  slides.subj_info = slide({
    name: "subj_info",
    submit: function(e) {
      exp.subj_data = {
        language: $("#language").val(),
        enjoyment: $("#enjoyment").val(),
        asses: $('input[name="assess"]:checked').val(),
        age: $("#age").val(),
        gender: $("#gender").val(),
        education: $("#education").val(),
        fairprice: $("#fairprice").val(),
        comments: $("#comments").val()
      };
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });






  // 
  slides.thanks = slide({
    name: "thanks",
    start: function() {
      exp.data = {
        "trials": exp.data_trials,
        "catch_trials": exp.catch_trials,
        "system": exp.system,
        "personae": exp.persona,
        "subject_information": exp.subj_data,
        "time_in_minutes": (Date.now() - exp.startT) / 60000
      };
      proliferate.submit(exp.data);
    }
  });

  return slides;
}







/// initialize experiment
function init() {

  exp.intro = intro;
  exp.training = all_training;

  exp.trials = [];
  exp.catch_trials = [];
  


  // var stimuli = all_stims;

  // exp.stimuli = _.shuffle(stimuli); //call _.shuffle(stimuli) to randomize the order;
  // console.log(exp.stimuli)
  




  var crit_stims = _.shuffle(all_stims);
  var fill_stims = _.shuffle(all_fills);


  var combinedStims = $.map(fill_stims, function(v,i) {
    return [v, crit_stims[i]]
  });

  exp.stimuli = combinedStims;




  exp.n_trials = exp.stimuli.length;



  exp.persona = _.sample(["ra", "ea"]); //can randomize between subjects conditions here
  console.log("persona:", exp.persona)


  exp.condition = _.shuffle(["m","m","m","m","m","m","mm","mm","mm","mm","mm","mm","nm","nm","nm","nm","nm","nm","nnm","nnm","nnm","nnm","nnm","nnm"])
  console.log("condition:", exp.condition)

  // function makeStims(cond, i) {
  //   stims[i].condition = cond;
  // }

  // var makeStims = function(cond,i) {
  //   stimuli[i].condition = cond;
  // }
  // console.log("condition", cond)
  
  exp.system = {
    Browser: BrowserDetect.browser,
    OS: BrowserDetect.OS,
    screenH: screen.height,
    screenUH: exp.height,
    screenW: screen.width,
    screenUW: exp.width
  };

  //blocks of the experiment:
  exp.structure = [
    "i0",
    "instructions",
    "intro",
    "interim1",
    "training",
    "startExp",
    "trial",
    "subj_info",
    "thanks"
  ];

  exp.data_trials = [];

  //make corresponding slides:
  exp.slides = make_slides(exp);

  exp.nQs = utils.get_exp_length();
  //this does not work if there are stacks of stims (but does work for an experiment with this structure)
  //relies on structure and slides being defined

  $('.slide').hide(); //hide everything

  $("#start_button").click(function() {
    exp.go();
  });

  exp.go(); //show first slide
}
