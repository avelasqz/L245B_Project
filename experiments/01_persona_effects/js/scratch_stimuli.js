var old_intro = 
  
// Context: A recent snowfall could have impacted public transportation. Becky and Tyler are figuring out how to get back home.
// Becky : Hey, is any metro line running?
// Tyler: Some are.
// L1: running L2: closed L3: running

  // [{
  //   "item": "intro",
  //   "img1": "becky_tyler.png", //no empty image on this one
  //   "img2": "intro_becky_tyler.png",
  //   "img_phone": "phone_intro.png",
  //   "questionintro": "Here's the picture!",
  //   "scenario": "A recent snowfall could have impacted public transportation. Becky and Tyler are figuring out how to get back home.",
  //   "introtophone": "And here are the phone pictures!",
  //   "question": "Which of these two phones is the one Tyler is looking at?",
  //   "spaceforsolution": "Press Space for the solution",
  //   "space_msg": "Here, the info on the screen reports that two lines are running; it thus fits what Tyler is saying. In your response, you'd therefore select the picture with the visible screen. But if Tyler had said something like 'They are all running' you'd have instead selected the picture of the flipped phone, since the info on the screen would not have fitted what Tyler said.",
  //   "spacetostart": "Press Space to start the experiment!"
  // }]

  [{
    "item": "intro",
    "img": "intro_bt.png",
    "img_phone": "phone_intro.png",
    "questionintro": "Here's the picture!",
    "scenario": "A recent snowfall could have impacted public transportation. Becky and Tyler are figuring out how to get back home.",
    "introtophone": "And here are the phone pictures!",
    "question": "Which of these two phones is the one Tyler is looking at?",
    "spaceforsolution": "Press Space for the solution",
    "space_msg": "Here, the info on the screen reports that two lines are running; it thus fits what Tyler is saying. In your response, you'd therefore select the picture with the visible screen. But if Tyler had said something like 'They are all running' you'd have instead selected the picture of the flipped phone, since the info on the screen would not have fitted what Tyler said.",
    "spacetostart": "Press Space to start the experiment!"
  }]

var old_training =
    
// Context: A recent snowfall could have impacted public transportation. Becky and Tyler are figuring out how to get back home.
// Becky : Hey, what metro lines are running?
// Tyler: None are running.
// L1: running L2: closed L3: running

  // [{
  //   "item": "training1",
  //   "img1": "becky_tyler.png",
  //   "img2": "training1_becky_tyler.png",
  //   "img_phone": "phone_training1.png",
  //   "scenario": "A recent snowfall could have impacted public transportation. Becky and Tyler are figuring out how to get back home.",
  //   "question": "Which of these two phones is the one Tyler is looking at?"
  // },

  [{
    "item": "training1",
    "speech": "training1_bt.png",
    "phone": "phone_training1.png",
    "scenario": "A recent snowfall could have impacted public transportation. Becky and Tyler are figuring out how to get back home.",
    "question": "Which of these two phones is the one Tyler is looking at?"
  },

// Context: A recent snowfall could have impacted public transportation. Becky and Tyler are figuring out how to get back home.
// Becky : Hey, what metro lines are running?
// Tyler: They are all running.
// L1: running L2: running L3: running

  {
    "item": "training2",
    "speech": "training2_bt.png",
    "phone": "phone_training2.png",
    "scenario": "A recent snowfall could have impacted public transportation. Becky and Tyler are figuring out how to get back home.",
    "question": "Which of these two phones is the one Tyler is looking at?"
  },

// Context: A recent snowfall could have impacted public transportation. Becky and Tyler are figuring out how to get back home.
// Becky : Hey, are any of the metro lines running?
// Tyler: Some of them are.
// L1: closed L2: closed L3: closed

  {
    "item": "training3",
    "speech": "training3_bt.png",
    "phone": "phone_training3.png",
    "scenario": "A recent snowfall could have impacted public transportation. Becky and Tyler are figuring out how to get back home.",
    "question": "Which of these two phones is the one Tyler is looking at?"
  }]






// data for all stimuli in the form of a list of JavaScript objects
// the stimuli below are organized as follows: first the time contexts, then the cost contexts, then the distance contexts; inside each of these, there are eight scenarios; for each scenario, there are eight items, due to the 2x4 (persona x match conditions) design. So, the first 64 stimuli are time, the second 64 are cost, and the third 64 are distance.

var old_stims =
//Time

// 1. Context:fEva/Rachelg and fAlex/Arthurg want to go to the movies. Eva’s phone is dead
// and she doesn’t want to lose track of time.
// fEva/Rachelg : Do you have the time?
// fAlex/Arthurg: It’s 3.
// Match: 3:00; NNM: 2:58; NM: 2:53; MisMatch: 1:12

  [{

    //the original stimuli:
  // {
  //   "item": "movies",
  //   "img1": "rachel_arthur.png",
  //   "img2": "movies_rachel_arthur.png",
  //   "img_phone": "phone_3.00.png",
  //   "scenario": "Rachel and Arthur want to go to the movies. Rachel's phone is dead and she doesn't want to lose track of time.",
  //   "question": "Which phone is Arthur looking at in the picture?"
  // },

  // the second go at stimuli:
  
  //   "domain": "time",
  //   "item": "movies",
  //   "interlocutors": "rachel_arthur.png", //movies will be appended to rachel_arthur as the exp runs
  //   // "img2": "movies_rachel_arthur.png",
  //   "img_phone": "phone_movies.png", //this will be further specified to phone_movies_match, etc., as the exp runs
  //   "scenario": "Rachel and Arthur want to go to the movies. Rachel's phone is dead and she doesn't want to lose track of time.",
  //   "question": "Which phone is Arthur looking at in the picture?"
  // }

   
    "domain": "time",
    "item": "movies",
    "scenario_ra": "Rachel and Arthur want to go to the movies. Rachel's phone is dead and she doesn't want to lose track of time.",
    "scenario_ea": "Eva and Alex want to go to the movies. Eva's phone is dead and she doesn't want to lose track of time.",
    "question_ra": "Which phone is Arthur looking at in the picture?",
    "question_ea": "Which phone is Alex looking at in the picture?"
    //created from these: interlocutors (from persona run in init), speech, phone, the specific scenario, the specific question; note that .png will be added in each trial.
  },



  // {
  //   "item": "movies",
  //   "img1": "rachel_arthur.png",
  //   "img2": "movies_rachel_arthur.png",
  //   "img_phone": "phone_2.58.png",
  //   "scenario": "Rachel and Arthur want to go to the movies. Rachel's phone is dead and she doesn't want to lose track of time.",
  //   "question": "Which phone is Arthur looking at in the picture?"
  // },
//   {
//     "item": "movies",
//     "img1": "rachel_arthur.png",
//     "img2": "movies_rachel_arthur.png",
//     "img_phone": "phone_2.53.png",
//     "scenario": "Rachel and Arthur want to go to the movies. Rachel's phone is dead and she doesn't want to lose track of time.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "movies",
//     "img1": "rachel_arthur.png",
//     "img2": "movies_rachel_arthur.png",
//     "img_phone": "phone_1.12.png",
//     "scenario": "Rachel and Arthur want to go to the movies. Rachel's phone is dead and she doesn't want to lose track of time.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "movies",
//     "img1": "eva_alex.png",
//     "img2": "movies_eva_alex.png",
//     "img_phone": "phone_3.00.png",
//     "scenario": "Eva and Alex want to go to the movies. Eva's phone is dead and she doesn't want to lose track of time.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "movies",
//     "img1": "eva_alex.png",
//     "img2": "movies_eva_alex.png",
//     "img_phone": "phone_2.58.png",
//     "scenario": "Eva and Alex want to go to the movies. Eva's phone is dead and she doesn't want to lose track of time.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "movies",
//     "img1": "eva_alex.png",
//     "img2": "movies_eva_alex.png",
//     "img_phone": "phone_2.53.png",
//     "scenario": "Eva and Alex want to go to the movies. Eva's phone is dead and she doesn't want to lose track of time.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "movies",
//     "img1": "eva_alex.png",
//     "img2": "movies_eva_alex.png",
//     "img_phone": "phone_1.12.png",
//     "scenario": "Eva and Alex want to go to the movies. Eva's phone is dead and she doesn't want to lose track of time.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },


// // 2. Context:fEva/Rachelg and fAlex/Arthurg want to drop by a friend’s house. Her phone is
// // dead, so she asks for the time.
// // fEva/Rachelg : Do you have the time?
// // fAlex/Arthurg: It’s 2:30.
// // Match: 2:30; NNM: 2:32; NM: 2:37; MisMatch: 7:55

  {
    "domain": "time",
    "item": "friendshouse",
    "scenario_ra": "Rachel and Arthur want to drop by a friend's house. Her phone is dead, so she asks for the time.",
    "scenario_ea": "Eva and Alex want to drop by a friend's house. Her phone is dead, so she asks for the time.",
    "question_ra": "Which phone is Arthur looking at in the picture?",
    "question_ea": "Which phone is Alex looking at in the picture?"
  },
//   {
//     "item": "friendshouse",
//     "img1": "rachel_arthur.png",
//     "img2": "friendshouse_rachel_arthur.png",
//     "img_phone": "phone_2.32.png",
//     "scenario": "Rachel and Arthur want to drop by a friend's house. Her phone is dead, so she asks for the time.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "friendshouse",
//     "img1": "rachel_arthur.png",
//     "img2": "friendshouse_rachel_arthur.png",
//     "img_phone": "phone_2.37.png",
//     "scenario": "Rachel and Arthur want to drop by a friend's house. Her phone is dead, so she asks for the time.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "friendshouse",
//     "img1": "rachel_arthur.png",
//     "img2": "friendshouse_rachel_arthur.png",
//     "img_phone": "phone_7.55.png",
//     "scenario": "Rachel and Arthur want to drop by a friend's house. Her phone is dead, so she asks for the time.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "friendshouse",
//     "img1": "eva_alex.png",
//     "img2": "friendshouse_eva_alex.png",
//     "img_phone": "phone_2.30.png",
//     "scenario": "Eva and Alex want to drop by a friend's house. Her phone is dead, so she asks for the time.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "friendshouse",
//     "img1": "eva_alex.png",
//     "img2": "friendshouse_eva_alex.png",
//     "img_phone": "phone_2.32.png",
//     "scenario": "Eva and Alex want to drop by a friend's house. Her phone is dead, so she asks for the time.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "friendshouse",
//     "img1": "eva_alex.png",
//     "img2": "friendshouse_eva_alex.png",
//     "img_phone": "phone_2.37.png",
//     "scenario": "Eva and Alex want to drop by a friend's house. Her phone is dead, so she asks for the time.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "friendshouse",
//     "img1": "eva_alex.png",
//     "img2": "friendshouse_eva_alex.png",
//     "img_phone": "phone_7.55.png",
//     "scenario": "Eva and Alex want to drop by a friend's house. Her phone is dead, so she asks for the time.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },

// // 3. Context: fAlex/Arthurg and fEva/Rachelg are going to a friend’s place for dinner. fEva/Rachelg
// // needs to first run some errands before going.
// // fEva/Rachelg : What’s the time?
// // fAlex/Arthurg: It’s 5.
// // Match: 5:00; NNM: 5:03; NM: 5:09; MisMatch: 9:55

  {
    "domain": "time",
    "item": "friendsdinner",
    "scenario_ra": "Arthur and Rachel are going to a friend's place for dinner. Rachel needs to first run some errands before going.",
    "question_ra": "Which phone is Arthur looking at in the picture?",
    "scenario_ea": "Alex and Eva are going to a friend's place for dinner. Eva needs to first run some errands before going.",
    "question_ea": "Which phone is Alex looking at in the picture?"
  },
//   {
//     "item": "friendsdinner",
//     "img1": "rachel_arthur.png",
//     "img2": "friendsdinner_rachel_arthur.png",
//     "img_phone": "phone_5.03.png",
//     "scenario": "Arthur and Rachel are going to a friend's place for dinner. Rachel needs to first run some errands before going.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "friendsdinner",
//     "img1": "rachel_arthur.png",
//     "img2": "friendsdinner_rachel_arthur.png",
//     "img_phone": "phone_5.09.png",
//     "scenario": "Arthur and Rachel are going to a friend's place for dinner. Rachel needs to first run some errands before going.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "friendsdinner",
//     "img1": "rachel_arthur.png",
//     "img2": "friendsdinner_rachel_arthur.png",
//     "img_phone": "phone_9.55.png",
//     "scenario": "Arthur and Rachel are going to a friend's place for dinner. Rachel needs to first run some errands before going.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "friendsdinner",
//     "img1": "eva_alex.png",
//     "img2": "friendsdinner_eva_alex.png",
//     "img_phone": "phone_5.00.png",
//     "scenario": "Alex and Eva are going to a friend's place for dinner. Eva needs to first run some errands before going.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "friendsdinner",
//     "img1": "eva_alex.png",
//     "img2": "friendsdinner_eva_alex.png",
//     "img_phone": "phone_5.03.png",
//     "scenario": "Alex and Eva are going to a friend's place for dinner. Eva needs to first run some errands before going.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "friendsdinner",
//     "img1": "eva_alex.png",
//     "img2": "friendsdinner_eva_alex.png",
//     "img_phone": "phone_5.09.png",
//     "scenario": "Alex and Eva are going to a friend's place for dinner. Eva needs to first run some errands before going.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "friendsdinner",
//     "img1": "eva_alex.png",
//     "img2": "friendsdinner_eva_alex.png",
//     "img_phone": "phone_9.55.png",
//     "scenario": "Alex and Eva are going to a friend's place for dinner. Eva needs to first run some errands before going.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },

// // 4. Context: fEva/Rachelg and fAlex/Arthurg are going to have a picnic, but fEva/Rachelg
// // needs to stop at home first.
// // fEva/Rachelg : Hey, do you have the time?
// // fAlex/Arthurg: It’s 5:30.
// // Match: 5:30; NNM: 5:27; NM: 5:21; MisMatch: 11:14

  {
    "domain": "time",
    "item": "picnic",
    "scenario_ra": "Rachel and Arthur are going to have a picnic, but Rachel needs to stop at home first.",
    "question_ra": "Which phone is Arthur looking at in the picture?",
    "scenario_ea": "Eva and Alex are going to have a picnic, but Eva needs to stop at home first.",
    "question_ea": "Which phone is Alex looking at in the picture?"
  },
//   {
//     "item": "picnic",
//     "img1": "rachel_arthur.png",
//     "img2": "picnic_rachel_arthur.png",
//     "img_phone": "phone_5.27.png",
//     "scenario": "Rachel and Arthur are going to have a picnic, but Rachel needs to stop at home first.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "picnic",
//     "img1": "rachel_arthur.png",
//     "img2": "picnic_rachel_arthur.png",
//     "img_phone": "phone_5.21.png",
//     "scenario": "Rachel and Arthur are going to have a picnic, but Rachel needs to stop at home first.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "picnic",
//     "img1": "rachel_arthur.png",
//     "img2": "picnic_rachel_arthur.png",
//     "img_phone": "phone_11.14.png",
//     "scenario": "Rachel and Arthur are going to have a picnic, but Rachel needs to stop at home first.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "picnic",
//     "img1": "eva_alex.png",
//     "img2": "picnic_eva_alex.png",
//     "img_phone": "phone_5.30.png",
//     "scenario": "Eva and Alex are going to have a picnic, but Eva needs to stop at home first.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "picnic",
//     "img1": "eva_alex.png",
//     "img2": "picnic_eva_alex.png",
//     "img_phone": "phone_5.27.png",
//     "scenario": "Eva and Alex are going to have a picnic, but Eva needs to stop at home first.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "picnic",
//     "img1": "eva_alex.png",
//     "img2": "picnic_eva_alex.png",
//     "img_phone": "phone_5.21.png",
//     "scenario": "Eva and Alex are going to have a picnic, but Eva needs to stop at home first.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "picnic",
//     "img1": "eva_alex.png",
//     "img2": "picnic_eva_alex.png",
//     "img_phone": "phone_11.14.png",
//     "scenario": "Eva and Alex are going to have a picnic, but Eva needs to stop at home first.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },

// // 5. Context: fEva/Rachelg and fAlex/Arthurg want to go for a walk. fEva/Rachelg is debating
// // whether it’d be better to grab some food before.
// // fEva/Rachelg : What’s the time?
// // fAlex/Arthurg: It’s 11:30.
// // Match: 11:30; NNM: 11:34; NM: 11:41; MisMatch: 4:11

  {
    "domain": "time",
    "item": "walk",
    "scenario_ra": "Rachel and Arthur want to go for a walk. Rachel is debating whether it'd be better to grab some food before.",
    "question_ra": "Which phone is Arthur looking at in the picture?",
    "scenario_ea": "Eva and Alex want to go for a walk. Eva is debating whether it'd be better to grab some food before.",
    "question_ea": "Which phone is Alex looking at in the picture?"
  },
//   {
//     "item": "walk",
//     "img1": "rachel_arthur.png",
//     "img2": "walk_rachel_arthur.png",
//     "img_phone": "phone_11.34.png",
//     "scenario": "Rachel and Arthur want to go for a walk. Rachel is debating whether it'd be better to grab some food before.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "walk",
//     "img1": "rachel_arthur.png",
//     "img2": "walk_rachel_arthur.png",
//     "img_phone": "phone_11.41.png",
//     "scenario": "Rachel and Arthur want to go for a walk. Rachel is debating whether it'd be better to grab some food before.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "walk",
//     "img1": "rachel_arthur.png",
//     "img2": "walk_rachel_arthur.png",
//     "img_phone": "phone_4.11.png",
//     "scenario": "Rachel and Arthur want to go for a walk. Rachel is debating whether it'd be better to grab some food before.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "walk",
//     "img1": "eva_alex.png",
//     "img2": "walk_eva_alex.png",
//     "img_phone": "phone_11.30.png",
//     "scenario": "Eva and Alex want to go for a walk. Eva is debating whether it'd be better to grab some food before.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "walk",
//     "img1": "eva_alex.png",
//     "img2": "walk_eva_alex.png",
//     "img_phone": "phone_11.34.png",
//     "scenario": "Eva and Alex want to go for a walk. Eva is debating whether it'd be better to grab some food before.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "walk",
//     "img1": "eva_alex.png",
//     "img2": "walk_eva_alex.png",
//     "img_phone": "phone_11.41.png",
//     "scenario": "Eva and Alex want to go for a walk. Eva is debating whether it'd be better to grab some food before.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "walk",
//     "img1": "eva_alex.png",
//     "img2": "walk_eva_alex.png",
//     "img_phone": "phone_4.11.png",
//     "scenario": "Eva and Alex want to go for a walk. Eva is debating whether it'd be better to grab some food before.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },

// // 6. Context: fEva/Rachelg would like to get home before it’s dark. Her phone is dead, so she
// // asks fAlex/Arthurg for the time.
// // fEva/Rachelg : Hey, do you have the time?
// // fAlex/Arthurg: It’s 6:30.
// // Match: 6:30; NNM: 6:26; NM: 6:19; MisMatch: 4:11

  {
    "domain": "time",
    "item": "beforedark",
    "scenario_ra": "Rachel would like to get home before it's dark. Her phone is dead, so she asks Arthur for the time.",
    "question_ra": "Which phone is Arthur looking at in the picture?",
    "scenario_ea": "Eva would like to get home before it's dark. Her phone is dead, so she asks Alex for the time.",
    "question_ea": "Which phone is Alex looking at in the picture?"
  },
//   {
//     "item": "beforedark",
//     "img1": "rachel_arthur.png",
//     "img2": "beforedark_rachel_arthur.png",
//     "img_phone": "phone_6.26.png",
//     "scenario": "Rachel would like to get home before it's dark. Her phone is dead, so she asks Arthur for the time.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "beforedark",
//     "img1": "rachel_arthur.png",
//     "img2": "beforedark_rachel_arthur.png",
//     "img_phone": "phone_6.19.png",
//     "scenario": "Rachel would like to get home before it's dark. Her phone is dead, so she asks Arthur for the time.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "beforedark",
//     "img1": "rachel_arthur.png",
//     "img2": "beforedark_rachel_arthur.png",
//     "img_phone": "phone_4.11.png",
//     "scenario": "Rachel would like to get home before it's dark. Her phone is dead, so she asks Arthur for the time.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "beforedark",
//     "img1": "eva_alex.png",
//     "img2": "beforedark_eva_alex.png",
//     "img_phone": "phone_6.30.png",
//     "scenario": "Eva would like to get home before it's dark. Her phone is dead, so she asks Alex for the time.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "beforedark",
//     "img1": "eva_alex.png",
//     "img2": "beforedark_eva_alex.png",
//     "img_phone": "phone_6.26.png",
//     "scenario": "Eva would like to get home before it's dark. Her phone is dead, so she asks Alex for the time.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "beforedark",
//     "img1": "eva_alex.png",
//     "img2": "beforedark_eva_alex.png",
//     "img_phone": "phone_6.19.png",
//     "scenario": "Eva would like to get home before it's dark. Her phone is dead, so she asks Alex for the time.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "beforedark",
//     "img1": "eva_alex.png",
//     "img2": "beforedark_eva_alex.png",
//     "img_phone": "phone_4.11.png",
//     "scenario": "Eva would like to get home before it's dark. Her phone is dead, so she asks Alex for the time.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },

// // 7. Context: fEva/Rachelg would like to take a walk at the park before it gets dark. She asks
// // fAlex/Arthurg for the time.
// // fEva/Rachelg : What’s the time?
// // fAlex/Arthurg: It’s 7.
// // Match: 7:00; NNM: 7:05; NM: 7:13; MisMatch: 2:11

  {
    "domain": "time",
    "item": "walkinthepark",
    "scenario_ra": "Rachel would like to take a walk at the park before it gets dark. She asks Arthur for the time.",
    "question_ra": "Which phone is Arthur looking at in the picture?",
    "scenario_ea": "Eva would like to take a walk at the park before it gets dark. She asks Alex for the time.",
    "question_ea": "Which phone is Alex looking at in the picture?"
  },
//   {
//     "item": "walkinthepark",
//     "img1": "rachel_arthur.png",
//     "img2": "walkinthepark_rachel_arthur.png",
//     "img_phone": "phone_7.05.png",
//     "scenario": "Rachel would like to take a walk at the park before it gets dark. She asks Arthur for the time.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "walkinthepark",
//     "img1": "rachel_arthur.png",
//     "img2": "walkinthepark_rachel_arthur.png",
//     "img_phone": "phone_7.13.png",
//     "scenario": "Rachel would like to take a walk at the park before it gets dark. She asks Arthur for the time.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "walkinthepark",
//     "img1": "rachel_arthur.png",
//     "img2": "walkinthepark_rachel_arthur.png",
//     "img_phone": "phone_2.11.png",
//     "scenario": "Rachel would like to take a walk at the park before it gets dark. She asks Arthur for the time.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "walkinthepark",
//     "img1": "eva_alex.png",
//     "img2": "walkinthepark_eva_alex.png",
//     "img_phone": "phone_7.00.png",
//     "scenario": "Eva would like to take a walk at the park before it gets dark. She asks Alex for the time.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "walkinthepark",
//     "img1": "eva_alex.png",
//     "img2": "walkinthepark_eva_alex.png",
//     "img_phone": "phone_7.05.png",
//     "scenario": "Eva would like to take a walk at the park before it gets dark. She asks Alex for the time.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "walkinthepark",
//     "img1": "eva_alex.png",
//     "img2": "walkinthepark_eva_alex.png",
//     "img_phone": "phone_7.13.png",
//     "scenario": "Eva would like to take a walk at the park before it gets dark. She asks Alex for the time.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "walkinthepark",
//     "img1": "eva_alex.png",
//     "img2": "walkinthepark_eva_alex.png",
//     "img_phone": "phone_2.11.png",
//     "scenario": "Eva would like to take a walk at the park before it gets dark. She asks Alex for the time.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },

// // 8. Context: It’s sunny outside, and fEva/Rachelg would like to go for a walk. She asks
// // fAlex/Arthurg for the time.
// // fEva/Rachelg : What’s the time?
// // fAlex/Arthurg: It’s 4.
// // Match: 4:00; NNM: 3:55; NM: 3:47; MisMatch: 9:10

  {
    "domain": "time",
    "item": "sunny",
    "scenario_ra": "It's sunny outside, and Rachel would like to go for a walk. She asks Arthur for the time.",
    "question_ra": "Which phone is Arthur looking at in the picture?",
    "scenario_ea": "It's sunny outside, and Eva would like to go for a walk. She asks Alex for the time.",
    "question_ea": "Which phone is Alex looking at in the picture?"
  },
//   {
//     "item": "sunny",
//     "img1": "rachel_arthur.png",
//     "img2": "sunny_rachel_arthur.png",
//     "img_phone": "phone_3.55.png",
//     "scenario": "It's sunny outside, and Rachel would like to go for a walk. She asks Arthur for the time.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "sunny",
//     "img1": "rachel_arthur.png",
//     "img2": "sunny_rachel_arthur.png",
//     "img_phone": "phone_3.47.png",
//     "scenario": "It's sunny outside, and Rachel would like to go for a walk. She asks Arthur for the time.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "sunny",
//     "img1": "rachel_arthur.png",
//     "img2": "sunny_rachel_arthur.png",
//     "img_phone": "phone_9.10.png",
//     "scenario": "It's sunny outside, and Rachel would like to go for a walk. She asks Arthur for the time.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "sunny",
//     "img1": "eva_alex.png",
//     "img2": "sunny_eva_alex.png",
//     "img_phone": "phone_4.00.png",
//     "scenario": "It's sunny outside, and Eva would like to go for a walk. She asks Alex for the time.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "sunny",
//     "img1": "eva_alex.png",
//     "img2": "sunny_eva_alex.png",
//     "img_phone": "phone_3.55.png",
//     "scenario": "It's sunny outside, and Eva would like to go for a walk. She asks Alex for the time.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "sunny",
//     "img1": "eva_alex.png",
//     "img2": "sunny_eva_alex.png",
//     "img_phone": "phone_3.47.png",
//     "scenario": "It's sunny outside, and Eva would like to go for a walk. She asks Alex for the time.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "sunny",
//     "img1": "eva_alex.png",
//     "img2": "sunny_eva_alex.png",
//     "img_phone": "phone_9.10.png",
//     "scenario": "It's sunny outside, and Eva would like to go for a walk. She asks Alex for the time.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },



// //Cost

// // 1. Context:fEva/Rachelg and fAlex/Arthurg want to go visit their cousins for Thanksgiving.
// // fEva/Rachelg : So, how much is a roundtrip ticket?
// // fAlex/Arthurg: It’s $300.
// // Match: f$300.03/300.00g; NNM: 295.03; NM: $288.03; MisMatch: $788.03

  {
    "domain": "cost",
    "item": "cousinsThanksgiving",
    "scenario_ra": "Rachel and Arthur want to go visit their cousins for Thanksgiving.",
    "question_ra": "Which phone is Arthur looking at in the picture?",
    "scenario_ea": "Eva and Alex want to go visit their cousins for Thanksgiving.",
    "question_ea": "Which phone is Alex looking at in the picture?"
  },
//   {
//     "item": "cousinsThanksgiving",
//     "img1": "rachel_arthur.png",
//     "img2": "cousinsThanksgiving_rachel_arthur.png",
//     "img_phone": "phone_295.03.png",
//     "scenario": "Rachel and Arthur want to go visit their cousins for Thanksgiving.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "cousinsThanksgiving",
//     "img1": "rachel_arthur.png",
//     "img2": "cousinsThanksgiving_rachel_arthur.png",
//     "img_phone": "phone_288.03.png",
//     "scenario": "Rachel and Arthur want to go visit their cousins for Thanksgiving.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "cousinsThanksgiving",
//     "img1": "rachel_arthur.png",
//     "img2": "cousinsThanksgiving_rachel_arthur.png",
//     "img_phone": "phone_788.03.png",
//     "scenario": "Rachel and Arthur want to go visit their cousins for Thanksgiving.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "cousinsThanksgiving",
//     "img1": "eva_alex.png",
//     "img2": "cousinsThanksgiving_eva_alex.png",
//     "img_phone": "phone_300.03.png",
//     "scenario": "Eva and Alex want to go visit their cousins for Thanksgiving.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "cousinsThanksgiving",
//     "img1": "eva_alex.png",
//     "img2": "cousinsThanksgiving_eva_alex.png",
//     "img_phone": "phone_295.03.png",
//     "scenario": "Eva and Alex want to go visit their cousins for Thanksgiving.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "cousinsThanksgiving",
//     "img1": "eva_alex.png",
//     "img2": "cousinsThanksgiving_eva_alex.png",
//     "img_phone": "phone_288.03.png",
//     "scenario": "Eva and Alex want to go visit their cousins for Thanksgiving.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "cousinsThanksgiving",
//     "img1": "eva_alex.png",
//     "img2": "cousinsThanksgiving_eva_alex.png",
//     "img_phone": "phone_788.03.png",
//     "scenario": "Eva and Alex want to go visit their cousins for Thanksgiving.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },

// // 2. Context: fAlex/Arthurg and fEva/Rachelg need to book a hotel room for a night. They’ve
// // considered different options.
// // fEva/Rachelg : So, how much is the cheapest place?
// // fAlex/Arthurg: It’s $200.
// // Match: f$200.05/200.00g; NNM: 205.05; NM: $212.05; MisMatch: $678.05

  {
    "domain": "cost",
    "item": "hotelroom",
    "scenario_ra": "Arthur and Rachel need to book a hotel room for a night. They've considered different options.",
    "question_ra": "Which phone is Arthur looking at in the picture?",
    "scenario_ea": "Alex and Eva need to book a hotel room for a night. They've considered different options.",
    "question_ea": "Which phone is Alex looking at in the picture?"
  },
//   {
//     "item": "hotelroom",
//     "img1": "rachel_arthur.png",
//     "img2": "hotelroom_rachel_arthur.png",
//     "img_phone": "phone_205.05.png",
//     "scenario": "Arthur and Rachel need to book a hotel room for a night. They've considered different options.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "hotelroom",
//     "img1": "rachel_arthur.png",
//     "img2": "hotelroom_rachel_arthur.png",
//     "img_phone": "phone_212.05.png",
//     "scenario": "Arthur and Rachel need to book a hotel room for a night. They've considered different options.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "hotelroom",
//     "img1": "rachel_arthur.png",
//     "img2": "hotelroom_rachel_arthur.png",
//     "img_phone": "phone_678.05.png",
//     "scenario": "Arthur and Rachel need to book a hotel room for a night. They've considered different options.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "hotelroom",
//     "img1": "eva_alex.png",
//     "img2": "hotelroom_eva_alex.png",
//     "img_phone": "phone_200.05.png",
//     "scenario": "Alex and Eva need to book a hotel room for a night. They've considered different options.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "hotelroom",
//     "img1": "eva_alex.png",
//     "img2": "hotelroom_eva_alex.png",
//     "img_phone": "phone_205.05.png",
//     "scenario": "Alex and Eva need to book a hotel room for a night. They've considered different options.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "hotelroom",
//     "img1": "eva_alex.png",
//     "img2": "hotelroom_eva_alex.png",
//     "img_phone": "phone_212.05.png",
//     "scenario": "Alex and Eva need to book a hotel room for a night. They've considered different options.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "hotelroom",
//     "img1": "eva_alex.png",
//     "img2": "hotelroom_eva_alex.png",
//     "img_phone": "phone_678.05.png",
//     "scenario": "Alex and Eva need to book a hotel room for a night. They've considered different options.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },

// // 3. Context: fAlex/Arthurg and fEva/Rachelg need to order food for an event. The manager
// // just sent their quote.
// // fEva/Rachelg : So, how much is the quote?
// // fAlex/Arthurg: It’s $300.
// // Match: f$300.04/300.00g; NNM: 306.04; NM: $314.04; MisMatch: $760.04

  {
    "domain": "cost",
    "item": "food",
    "scenario_ra": "Arthur and Rachel need to order food for an event. The manager just sent their quote.",
    "question_ra": "Which phone is Arthur looking at in the picture?",
    "scenario_ea": "Alex and Eva need to order food for an event. The manager just sent their quote.",
    "question_ea": "Which phone is Alex looking at in the picture?"
  },
//   {
//     "item": "food",
//     "img1": "rachel_arthur.png",
//     "img2": "food_rachel_arthur.png",
//     "img_phone": "phone_306.04.png",
//     "scenario": "Arthur and Rachel need to order food for an event. The manager just sent their quote.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "food",
//     "img1": "rachel_arthur.png",
//     "img2": "food_rachel_arthur.png",
//     "img_phone": "phone_314.04.png",
//     "scenario": "Arthur and Rachel need to order food for an event. The manager just sent their quote.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "food",
//     "img1": "rachel_arthur.png",
//     "img2": "food_rachel_arthur.png",
//     "img_phone": "phone_760.04.png",
//     "scenario": "Arthur and Rachel need to order food for an event. The manager just sent their quote.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "food",
//     "img1": "eva_alex.png",
//     "img2": "food_eva_alex.png",
//     "img_phone": "phone_300.04.png",
//     "scenario": "Alex and Eva need to order food for an event. The manager just sent their quote.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "food",
//     "img1": "eva_alex.png",
//     "img2": "food_eva_alex.png",
//     "img_phone": "phone_306.04.png",
//     "scenario": "Alex and Eva need to order food for an event. The manager just sent their quote.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "food",
//     "img1": "eva_alex.png",
//     "img2": "food_eva_alex.png",
//     "img_phone": "phone_314.04.png",
//     "scenario": "Alex and Eva need to order food for an event. The manager just sent their quote.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "food",
//     "img1": "eva_alex.png",
//     "img2": "food_eva_alex.png",
//     "img_phone": "phone_760.04.png",
//     "scenario": "Alex and Eva need to order food for an event. The manager just sent their quote.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },


// // 4. Context: fEva/Rachelg and fAlex/Arthurg are planning a trip to visit a friend.
// // fEva/Rachelg : How much would it cost to take a train?
// // fAlex/Arthurg: It’s $200.
// // Match: f$200.09/200.00g; NNM: 194.09; NM: $186.09; MisMatch: $500.09

  {
    "domain": "cost",
    "item": "trip",
    "scenario_ra": "Rachel and Arthur are planning a trip to visit a friend.",
    "question_ra": "Which phone is Arthur looking at in the picture?",
    "scenario_ea": "Eva and Alex are planning a trip to visit a friend.",
    "question_ea": "Which phone is Alex looking at in the picture?"
  },
//   {
//     "item": "trip",
//     "img1": "rachel_arthur.png",
//     "img2": "trip_rachel_arthur.png",
//     "img_phone": "phone_194.09.png",
//     "scenario": "Rachel and Arthur are planning a trip to visit a friend.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "trip",
//     "img1": "rachel_arthur.png",
//     "img2": "trip_rachel_arthur.png",
//     "img_phone": "phone_186.09.png",
//     "scenario": "Rachel and Arthur are planning a trip to visit a friend.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "trip",
//     "img1": "rachel_arthur.png",
//     "img2": "trip_rachel_arthur.png",
//     "img_phone": "phone_500.09.png",
//     "scenario": "Rachel and Arthur are planning a trip to visit a friend.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "trip",
//     "img1": "eva_alex.png",
//     "img2": "trip_eva_alex.png",
//     "img_phone": "phone_200.09.png",
//     "scenario": "Eva and Alex are planning a trip to visit a friend.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "trip",
//     "img1": "eva_alex.png",
//     "img2": "trip_eva_alex.png",
//     "img_phone": "phone_194.09.png",
//     "scenario": "Eva and Alex are planning a trip to visit a friend.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "trip",
//     "img1": "eva_alex.png",
//     "img2": "trip_eva_alex.png",
//     "img_phone": "phone_186.09.png",
//     "scenario": "Eva and Alex are planning a trip to visit a friend.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "trip",
//     "img1": "eva_alex.png",
//     "img2": "trip_eva_alex.png",
//     "img_phone": "phone_500.09.png",
//     "scenario": "Eva and Alex are planning a trip to visit a friend.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },

// // 5. Context: fEva/Rachelg and fAlex/Arthurg are looking for a one-way plane ticket.
// // fEva/Rachelg : How much is the cheapest flight?
// // fAlex/Arthurg: It’s $300.
// // Match: f$300.03/200.00g; NNM: 292.03; NM: $284.03; MisMatch: $788.03

  {
    "domain": "cost",
    "item": "planeticket",
    "scenario_ra": "Rachel and Arthur are looking for a one-way plane ticket.",
    "question_ra": "Which phone is Arthur looking at in the picture?",
    "scenario_ea": "Eva and Alex are looking for a one-way plane ticket.",
    "question_ea": "Which phone is Alex looking at in the picture?"
  },
//   {
//     "item": "planeticket",
//     "img1": "rachel_arthur.png",
//     "img2": "planeticket_rachel_arthur.png",
//     "img_phone": "phone_292.03.png",
//     "scenario": "Rachel and Arthur are looking for a one-way plane ticket.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "planeticket",
//     "img1": "rachel_arthur.png",
//     "img2": "planeticket_rachel_arthur.png",
//     "img_phone": "phone_284.03.png",
//     "scenario": "Rachel and Arthur are looking for a one-way plane ticket.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "planeticket",
//     "img1": "rachel_arthur.png",
//     "img2": "planeticket_rachel_arthur.png",
//     "img_phone": "phone_788.03.png",
//     "scenario": "Rachel and Arthur are looking for a one-way plane ticket.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "planeticket",
//     "img1": "eva_alex.png",
//     "img2": "planeticket_eva_alex.png",
//     "img_phone": "phone_300.03.png",
//     "scenario": "Eva and Alex are looking for a one-way plane ticket.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "planeticket",
//     "img1": "eva_alex.png",
//     "img2": "planeticket_eva_alex.png",
//     "img_phone": "phone_292.03.png",
//     "scenario": "Eva and Alex are looking for a one-way plane ticket.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "planeticket",
//     "img1": "eva_alex.png",
//     "img2": "planeticket_eva_alex.png",
//     "img_phone": "phone_284.03.png",
//     "scenario": "Eva and Alex are looking for a one-way plane ticket.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "planeticket",
//     "img1": "eva_alex.png",
//     "img2": "planeticket_eva_alex.png",
//     "img_phone": "phone_788.03.png",
//     "scenario": "Eva and Alex are looking for a one-way plane ticket.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },

// // 6. Context: fEva/Rachelg and fAlex/Arthurg have been invited to a wedding.
// // fEva/Rachelg : So, how much is the cheapest place?
// // fAlex/Arthurg: It’s $200.
// // Match: f$200.05/200.00g; NNM: 208.05; NM: $216.05; MisMatch: $492.05

  {
    "domain": "cost",
    "item": "weddingcost",
    "scenario_ra": "Rachel and Arthur have been invited to a wedding.",
    "question_ra": "Which phone is Arthur looking at in the picture?",
    "scenario_ea": "Eva and Alex have been invited to a wedding.",
    "question_ea": "Which phone is Alex looking at in the picture?"
  },
//   {
//     "item": "weddingcost",
//     "img1": "rachel_arthur.png",
//     "img2": "weddingcost_rachel_arthur.png",
//     "img_phone": "phone_208.05.png",
//     "scenario": "Rachel and Arthur have been invited to a wedding.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "weddingcost",
//     "img1": "rachel_arthur.png",
//     "img2": "weddingcost_rachel_arthur.png",
//     "img_phone": "phone_216.05.png",
//     "scenario": "Rachel and Arthur have been invited to a wedding.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "weddingcost",
//     "img1": "rachel_arthur.png",
//     "img2": "weddingcost_rachel_arthur.png",
//     "img_phone": "phone_492.05.png",
//     "scenario": "Rachel and Arthur have been invited to a wedding.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "weddingcost",
//     "img1": "eva_alex.png",
//     "img2": "weddingcost_eva_alex.png",
//     "img_phone": "phone_200.05.png",
//     "scenario": "Eva and Alex have been invited to a wedding.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "weddingcost",
//     "img1": "eva_alex.png",
//     "img2": "weddingcost_eva_alex.png",
//     "img_phone": "phone_208.05.png",
//     "scenario": "Eva and Alex have been invited to a wedding.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "weddingcost",
//     "img1": "eva_alex.png",
//     "img2": "weddingcost_eva_alex.png",
//     "img_phone": "phone_216.05.png",
//     "scenario": "Eva and Alex have been invited to a wedding.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "weddingcost",
//     "img1": "eva_alex.png",
//     "img2": "weddingcost_eva_alex.png",
//     "img_phone": "phone_492.05.png",
//     "scenario": "Eva and Alex have been invited to a wedding.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },

// // 7. Context: fEva/Rachelg would like to buy a new couch. She has a specific type in mind, so
// // she asks fAlex/Arthurg to look up the price.
// // fEva/Rachelg : So, how much does it cost?
// // fAlex/Arthurg: It’s $300.
// // Match: f$300.04/300.00g; NNM: 309.04; NM: $318.04; MisMatch: $760.04

  {
    "domain": "cost",
    "item": "couch",
    "scenario_ra": "Rachel and Arthur would like to buy a new couch. She has a specific type in mind, so she asks Arthur to look up the price.",
    "question_ra": "Which phone is Arthur looking at in the picture?",
    "scenario_ea": "Eva and Alex would like to buy a new couch. She has a specific type in mind, so she asks Alex to look up the price.",
    "question_ea": "Which phone is Alex looking at in the picture?"
  },
//   {
//     "item": "couch",
//     "img1": "rachel_arthur.png",
//     "img2": "couch_rachel_arthur.png",
//     "img_phone": "phone_309.04.png",
//     "scenario": "Rachel and Arthur would like to buy a new couch. She has a specific type in mind, so she asks Arthur to look up the price.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "couch",
//     "img1": "rachel_arthur.png",
//     "img2": "couch_rachel_arthur.png",
//     "img_phone": "phone_318.04.png",
//     "scenario": "Rachel and Arthur would like to buy a new couch. She has a specific type in mind, so she asks Arthur to look up the price.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "couch",
//     "img1": "rachel_arthur.png",
//     "img2": "couch_rachel_arthur.png",
//     "img_phone": "phone_760.04.png",
//     "scenario": "Rachel and Arthur would like to buy a new couch. She has a specific type in mind, so she asks Arthur to look up the price.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "couch",
//     "img1": "eva_alex.png",
//     "img2": "couch_eva_alex.png",
//     "img_phone": "phone_300.04.png",
//     "scenario": "Eva and Alex would like to buy a new couch. She has a specific type in mind, so she asks Alex to look up the price.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "couch",
//     "img1": "eva_alex.png",
//     "img2": "couch_eva_alex.png",
//     "img_phone": "phone_309.04.png",
//     "scenario": "Eva and Alex would like to buy a new couch. She has a specific type in mind, so she asks Alex to look up the price.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "couch",
//     "img1": "eva_alex.png",
//     "img2": "couch_eva_alex.png",
//     "img_phone": "phone_318.04.png",
//     "scenario": "Eva and Alex would like to buy a new couch. She has a specific type in mind, so she asks Alex to look up the price.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "couch",
//     "img1": "eva_alex.png",
//     "img2": "couch_eva_alex.png",
//     "img_phone": "phone_760.04.png",
//     "scenario": "Eva and Alex would like to buy a new couch. She has a specific type in mind, so she asks Alex to look up the price.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },

// // 8. Context: fEva/Rachelg and fAlex/Arthurg have been invited to a friend reunion. They’re
// // considering driving there.
// // fEva/Rachelg : How much would it cost to rent a car for three days?
// // fAlex/Arthurg: It’s $200.
// // Match: f$200.09/200.00g; NNM: 191.09; NM: $182.09; MisMatch: $500.04

  {
    "domain": "cost",
    "item": "reunioncost",
    "scenario_ra": "Rachel and Arthur have been invited to a friend reunion. They're considering driving there.",
    "question_ra": "Which phone is Arthur looking at in the picture?",
    "scenario_ea": "Eva and Alex have been invited to a friend reunion. They're considering driving there.",
    "question_ea": "Which phone is Alex looking at in the picture?"
  },
//   {
//     "item": "reunioncost",
//     "img1": "rachel_arthur.png",
//     "img2": "reunioncost_rachel_arthur.png",
//     "img_phone": "phone_191.09.png",
//     "scenario": "Rachel and Arthur have been invited to a friend reunion. They're considering driving there.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "reunioncost",
//     "img1": "rachel_arthur.png",
//     "img2": "reunioncost_rachel_arthur.png",
//     "img_phone": "phone_182.09.png",
//     "scenario": "Rachel and Arthur have been invited to a friend reunion. They're considering driving there.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "reunioncost",
//     "img1": "rachel_arthur.png",
//     "img2": "reunioncost_rachel_arthur.png",
//     "img_phone": "phone_500.09.png",
//     "scenario": "Rachel and Arthur have been invited to a friend reunion. They're considering driving there.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "reunioncost",
//     "img1": "eva_alex.png",
//     "img2": "reunioncost_eva_alex.png",
//     "img_phone": "phone_200.09.png",
//     "scenario": "Eva and Alex have been invited to a friend reunion. They're considering driving there.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "reunioncost",
//     "img1": "eva_alex.png",
//     "img2": "reunioncost_eva_alex.png",
//     "img_phone": "phone_191.09.png",
//     "scenario": "Eva and Alex have been invited to a friend reunion. They're considering driving there.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "reunioncost",
//     "img1": "eva_alex.png",
//     "img2": "reunioncost_eva_alex.png",
//     "img_phone": "phone_182.09.png",
//     "scenario": "Eva and Alex have been invited to a friend reunion. They're considering driving there.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "reunioncost",
//     "img1": "eva_alex.png",
//     "img2": "reunioncost_eva_alex.png",
//     "img_phone": "phone_500.09.png",
//     "scenario": "Eva and Alex have been invited to a friend reunion. They're considering driving there.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },



// //Distance

// // 1. Context:fEva/Rachelg and fAlex/Arthurg have been invited to spend Thanksgiving with
// // Alex’s aunt.
// // fEva/Rachelg : How far out does she live?
// // fAlex/Arthurg: 200 miles.
// // Match: f200.2/300.0g; NNM: 191.2; NM: 182.2; MisMatch: 688.2

  {
    "domain": "distance",
    "item": "auntThanksgiving",
    "scenario_ra": "Rachel and Arthur have been invited to spend Thanksgiving with Arthur's aunt.",
    "question_ra": "Which phone is Arthur looking at in the picture?",
    "scenario_ea": "Eva and Alex have been invited to spend Thanksgiving with Alex's aunt.",
    "question_ea": "Which phone is Alex looking at in the picture?"
  },
//   {
//     "item": "auntThanksgiving",
//     "img1": "rachel_arthur.png",
//     "img2": "auntThanksgiving_rachel_arthur.png",
//     "img_phone": "phone_191.2.png",
//     "scenario": "Rachel and Arthur have been invited to spend Thanksgiving with Arthur's aunt.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "auntThanksgiving",
//     "img1": "rachel_arthur.png",
//     "img2": "auntThanksgiving_rachel_arthur.png",
//     "img_phone": "phone_182.2.png",
//     "scenario": "Rachel and Arthur have been invited to spend Thanksgiving with Arthur's aunt.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "auntThanksgiving",
//     "img1": "rachel_arthur.png",
//     "img2": "auntThanksgiving_rachel_arthur.png",
//     "img_phone": "phone_688.2.png",
//     "scenario": "Rachel and Arthur have been invited to spend Thanksgiving with Arthur's aunt.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "auntThanksgiving",
//     "img1": "eva_alex.png",
//     "img2": "auntThanksgiving_eva_alex.png",
//     "img_phone": "phone_200.2.png",
//     "scenario": "Eva and Alex have been invited to spend Thanksgiving with Alex's aunt.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "auntThanksgiving",
//     "img1": "eva_alex.png",
//     "img2": "auntThanksgiving_eva_alex.png",
//     "img_phone": "phone_191.2.png",
//     "scenario": "Eva and Alex have been invited to spend Thanksgiving with Alex's aunt.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "auntThanksgiving",
//     "img1": "eva_alex.png",
//     "img2": "auntThanksgiving_eva_alex.png",
//     "img_phone": "phone_182.2.png",
//     "scenario": "Eva and Alex have been invited to spend Thanksgiving with Alex's aunt.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "auntThanksgiving",
//     "img1": "eva_alex.png",
//     "img2": "auntThanksgiving_eva_alex.png",
//     "img_phone": "phone_688.2.png",
//     "scenario": "Eva and Alex have been invited to spend Thanksgiving with Alex's aunt.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },

// // 2. Context: Elena, a friend of fAlex/Arthurg and Eva, is in the US for a conference. fAlex/Arthurg
// // and fEva/Rachelg want to visit her.
// // fEva/Rachelg : How far out does she live?
// // fAlex/Arthurg: It’s 150 miles from here.
// // Match: f150.2/150.0g; NNM: 155.2; NM: 162.2; MisMatch: 542.2

  {
    "domain": "distance",
    "item": "elena",
    "scenario_ra": "Elena, a friend of Arthur and Rachel, is in the US for a conference. Arthur and Rachel want to visit her.",
    "question_ra": "Which phone is Arthur looking at in the picture?",
    "scenario_ea": "Elena, a friend of Alex and Eva, is in the US for a conference. Alex and Eva want to visit her.",
    "question_ea": "Which phone is Alex looking at in the picture?"
  },
//   {
//     "item": "elena",
//     "img1": "rachel_arthur.png",
//     "img2": "elena_rachel_arthur.png",
//     "img_phone": "phone_155.2.png",
//     "scenario": "Elena, a friend of Arthur and Rachel, is in the US for a conference. Arthur and Rachel want to visit her.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "elena",
//     "img1": "rachel_arthur.png",
//     "img2": "elena_rachel_arthur.png",
//     "img_phone": "phone_162.2.png",
//     "scenario": "Elena, a friend of Arthur and Rachel, is in the US for a conference. Arthur and Rachel want to visit her.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "elena",
//     "img1": "rachel_arthur.png",
//     "img2": "elena_rachel_arthur.png",
//     "img_phone": "phone_542.2.png",
//     "scenario": "Elena, a friend of Arthur and Rachel, is in the US for a conference. Arthur and Rachel want to visit her.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "elena",
//     "img1": "eva_alex.png",
//     "img2": "elena_eva_alex.png",
//     "img_phone": "phone_150.2.png",
//     "scenario": "Elena, a friend of Alex and Eva, is in the US for a conference. Alex and Eva want to visit her.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "elena",
//     "img1": "eva_alex.png",
//     "img2": "elena_eva_alex.png",
//     "img_phone": "phone_155.2.png",
//     "scenario": "Elena, a friend of Alex and Eva, is in the US for a conference. Alex and Eva want to visit her.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "elena",
//     "img1": "eva_alex.png",
//     "img2": "elena_eva_alex.png",
//     "img_phone": "phone_162.2.png",
//     "scenario": "Elena, a friend of Alex and Eva, is in the US for a conference. Alex and Eva want to visit her.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "elena",
//     "img1": "eva_alex.png",
//     "img2": "elena_eva_alex.png",
//     "img_phone": "phone_542.2.png",
//     "scenario": "Elena, a friend of Alex and Eva, is in the US for a conference. Alex and Eva want to visit her.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },

// // 3. Context: fAlex/Arthurg and fEva/Rachelg are out of town. They are trying to figure out a
// // good spot for a camping trip.
// // fEva/Rachelg : So, how far is the closest state park?
// // fAlex/Arthurg: It’s 250 miles away.
// // Match: f250.3/250.0g; NNM: 256.3; NM: 264.3; MisMatch: 712.3

  {
    "domain": "distance",
    "item": "camping",
    "scenario_ra": "Arthur and Rachel are out of town. They are trying to figure out a good spot for a camping trip.",
    "question_ra": "Which phone is Arthur looking at in the picture?",
    "scenario_ea": "Alex and Eva are out of town. They are trying to figure out a good spot for a camping trip.",
    "question_ea": "Which phone is Alex looking at in the picture?"
  },
//   {
//     "item": "camping",
//     "img1": "rachel_arthur.png",
//     "img2": "camping_rachel_arthur.png",
//     "img_phone": "phone_256.3.png",
//     "scenario": "Arthur and Rachel are out of town. They are trying to figure out a good spot for a camping trip.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "camping",
//     "img1": "rachel_arthur.png",
//     "img2": "camping_rachel_arthur.png",
//     "img_phone": "phone_264.3.png",
//     "scenario": "Arthur and Rachel are out of town. They are trying to figure out a good spot for a camping trip.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "camping",
//     "img1": "rachel_arthur.png",
//     "img2": "camping_rachel_arthur.png",
//     "img_phone": "phone_712.3.png",
//     "scenario": "Arthur and Rachel are out of town. They are trying to figure out a good spot for a camping trip.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "camping",
//     "img1": "eva_alex.png",
//     "img2": "camping_eva_alex.png",
//     "img_phone": "phone_250.3.png",
//     "scenario": "Alex and Eva are out of town. They are trying to figure out a good spot for a camping trip.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "camping",
//     "img1": "eva_alex.png",
//     "img2": "camping_eva_alex.png",
//     "img_phone": "phone_256.3.png",
//     "scenario": "Alex and Eva are out of town. They are trying to figure out a good spot for a camping trip.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "camping",
//     "img1": "eva_alex.png",
//     "img2": "camping_eva_alex.png",
//     "img_phone": "phone_264.3.png",
//     "scenario": "Alex and Eva are out of town. They are trying to figure out a good spot for a camping trip.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "camping",
//     "img1": "eva_alex.png",
//     "img2": "camping_eva_alex.png",
//     "img_phone": "phone_712.3.png",
//     "scenario": "Alex and Eva are out of town. They are trying to figure out a good spot for a camping trip.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },

// // 4. Context: fEva/Rachelg and fAlex/Arthurg are planning a trip to visit a friend who lives in
// // the backcountry.
// // fEva/Rachelg : How far is the closest airport?
// // fAlex/Arthurg: It’s 300 miles away.
// // Match: f300.2/300.0g; NNM: 294.2; NM: 286.2; MisMatch: 610.2

  {
    "domain": "distance",
    "item": "backcountry",
    "scenario_ra": "Rachel and Arthur are planning a trip to visit a friend who lives in the backcountry.",
    "question_ra": "Which phone is Arthur looking at in the picture?",
    "scenario_ea": "Eva and Alex are planning a trip to visit a friend who lives in the backcountry.",
    "question_ea": "Which phone is Alex looking at in the picture?"
  },
//   {
//     "item": "backcountry",
//     "img1": "rachel_arthur.png",
//     "img2": "backcountry_rachel_arthur.png",
//     "img_phone": "phone_294.2.png",
//     "scenario": "Rachel and Arthur are planning a trip to visit a friend who lives in the backcountry.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "backcountry",
//     "img1": "rachel_arthur.png",
//     "img2": "backcountry_rachel_arthur.png",
//     "img_phone": "phone_286.2.png",
//     "scenario": "Rachel and Arthur are planning a trip to visit a friend who lives in the backcountry.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "backcountry",
//     "img1": "rachel_arthur.png",
//     "img2": "backcountry_rachel_arthur.png",
//     "img_phone": "phone_610.2.png",
//     "scenario": "Rachel and Arthur are planning a trip to visit a friend who lives in the backcountry.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "backcountry",
//     "img1": "eva_alex.png",
//     "img2": "backcountry_eva_alex.png",
//     "img_phone": "phone_300.2.png",
//     "scenario": "Eva and Alex are planning a trip to visit a friend who lives in the backcountry.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "backcountry",
//     "img1": "eva_alex.png",
//     "img2": "backcountry_eva_alex.png",
//     "img_phone": "phone_294.2.png",
//     "scenario": "Eva and Alex are planning a trip to visit a friend who lives in the backcountry.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "backcountry",
//     "img1": "eva_alex.png",
//     "img2": "backcountry_eva_alex.png",
//     "img_phone": "phone_286.2.png",
//     "scenario": "Eva and Alex are planning a trip to visit a friend who lives in the backcountry.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "backcountry",
//     "img1": "eva_alex.png",
//     "img2": "backcountry_eva_alex.png",
//     "img_phone": "phone_610.2.png",
//     "scenario": "Eva and Alex are planning a trip to visit a friend who lives in the backcountry.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },

// // 5. Context: fEva/Rachelg has been invited to a friend reunion. She’s considering driving there.
// // fEva/Rachelg : Hey, can you check how far it is from here?
// // fAlex/Arthurg: It’s 200 miles.
// // Match: f200.1/200.0g; NNM: 192.1; NM: 186.1; MisMatch: 692.1

  {
    "domain": "distance",
    "item": "reuniondistance",
    "scenario_ra": "Rachel has been invited to a friend reunion. She's considering driving there.",
    "question_ra": "Which phone is Arthur looking at in the picture?",
    "scenario_ea": "Eva has been invited to a friend reunion. She's considering driving there.",
    "question_ea": "Which phone is Alex looking at in the picture?"
  },
//   {
//     "item": "reuniondistance",
//     "img1": "rachel_arthur.png",
//     "img2": "reuniondistance_rachel_arthur.png",
//     "img_phone": "phone_192.1.png",
//     "scenario": "Rachel has been invited to a friend reunion. She's considering driving there.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "reuniondistance",
//     "img1": "rachel_arthur.png",
//     "img2": "reuniondistance_rachel_arthur.png",
//     "img_phone": "phone_186.1.png",
//     "scenario": "Rachel has been invited to a friend reunion. She's considering driving there.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "reuniondistance",
//     "img1": "rachel_arthur.png",
//     "img2": "reuniondistance_rachel_arthur.png",
//     "img_phone": "phone_692.1.png",
//     "scenario": "Rachel has been invited to a friend reunion. She's considering driving there.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "reuniondistance",
//     "img1": "eva_alex.png",
//     "img2": "reuniondistance_eva_alex.png",
//     "img_phone": "phone_200.1.png",
//     "scenario": "Eva has been invited to a friend reunion. She's considering driving there.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "reuniondistance",
//     "img1": "eva_alex.png",
//     "img2": "reuniondistance_eva_alex.png",
//     "img_phone": "phone_192.1.png",
//     "scenario": "Eva has been invited to a friend reunion. She's considering driving there.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "reuniondistance",
//     "img1": "eva_alex.png",
//     "img2": "reuniondistance_eva_alex.png",
//     "img_phone": "phone_186.1.png",
//     "scenario": "Eva has been invited to a friend reunion. She's considering driving there.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "reuniondistance",
//     "img1": "eva_alex.png",
//     "img2": "reuniondistance_eva_alex.png",
//     "img_phone": "phone_692.1.png",
//     "scenario": "Eva has been invited to a friend reunion. She's considering driving there.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },

// // 6. Context: fAlex/Arthurg and fEva/Rachelg want to go apple picking, but they don’t know
// // much about what their area offers.
// // fEva/Rachelg : Hey, how far is the closest orchard?
// // fAlex/Arthurg: It’s 300 miles away.
// // Match: f300.1/300.0g; NNM: 308.1; NM: 316.1; MisMatch: 658.1

  {
    "domain": "distance",
    "item": "apples",
    "scenario_ra": "Arthur and Rachel want to go apple picking, but they don't know much about what their area offers.",
    "question_ra": "Which phone is Arthur looking at in the picture?",
    "scenario_ea": "Alex and Eva want to go apple picking, but they don't know much about what their area offers.",
    "question_ea": "Which phone is Alex looking at in the picture?"
  },
//   {
//     "item": "apples",
//     "img1": "rachel_arthur.png",
//     "img2": "apples_rachel_arthur.png",
//     "img_phone": "phone_308.1.png",
//     "scenario": "Arthur and Rachel want to go apple picking, but they don't know much about what their area offers.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "apples",
//     "img1": "rachel_arthur.png",
//     "img2": "apples_rachel_arthur.png",
//     "img_phone": "phone_316.1.png",
//     "scenario": "Arthur and Rachel want to go apple picking, but they don't know much about what their area offers.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "apples",
//     "img1": "rachel_arthur.png",
//     "img2": "apples_rachel_arthur.png",
//     "img_phone": "phone_658.1.png",
//     "scenario": "Arthur and Rachel want to go apple picking, but they don't know much about what their area offers.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "apples",
//     "img1": "eva_alex.png",
//     "img2": "apples_eva_alex.png",
//     "img_phone": "phone_300.1.png",
//     "scenario": "Alex and Eva want to go apple picking, but they don't know much about what their area offers.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "apples",
//     "img1": "eva_alex.png",
//     "img2": "apples_eva_alex.png",
//     "img_phone": "phone_308.1.png",
//     "scenario": "Alex and Eva want to go apple picking, but they don't know much about what their area offers.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "apples",
//     "img1": "eva_alex.png",
//     "img2": "apples_eva_alex.png",
//     "img_phone": "phone_316.1.png",
//     "scenario": "Alex and Eva want to go apple picking, but they don't know much about what their area offers.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "apples",
//     "img1": "eva_alex.png",
//     "img2": "apples_eva_alex.png",
//     "img_phone": "phone_658.1.png",
//     "scenario": "Alex and Eva want to go apple picking, but they don't know much about what their area offers.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },

// // 7. Context: fEva/Rachelg and fAlex/Arthurg have been invited to a wedding. They’re figuring
// // out the logistics.
// // fEva/Rachelg : So, how far is the venue?
// // fAlex/Arthurg: It’s 300 miles away.
// // Match: f300.2/300.0g; NNM: 309.2; NM: 318.2; MisMatch: 767.2

  {
    "domain": "distance",
    "item": "weddingdistance",
    "scenario_ra": "Rachel and Arthur have been invited to a wedding. They're figuring out the logistics.",
    "question_ra": "Which phone is Arthur looking at in the picture?",
    "scenario_ea": "Eva and Alex have been invited to a wedding. They're figuring out the logistics.",
    "question_ea": "Which phone is Alex looking at in the picture?"
  },
//   {
//     "item": "weddingdistance",
//     "img1": "rachel_arthur.png",
//     "img2": "weddingdistance_rachel_arthur.png",
//     "img_phone": "phone_309.2.png",
//     "scenario": "Rachel and Arthur have been invited to a wedding. They're figuring out the logistics.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "weddingdistance",
//     "img1": "rachel_arthur.png",
//     "img2": "weddingdistance_rachel_arthur.png",
//     "img_phone": "phone_318.2.png",
//     "scenario": "Rachel and Arthur have been invited to a wedding. They're figuring out the logistics.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "weddingdistance",
//     "img1": "rachel_arthur.png",
//     "img2": "weddingdistance_rachel_arthur.png",
//     "img_phone": "phone_767.2.png",
//     "scenario": "Rachel and Arthur have been invited to a wedding. They're figuring out the logistics.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "weddingdistance",
//     "img1": "eva_alex.png",
//     "img2": "weddingdistance_eva_alex.png",
//     "img_phone": "phone_300.2.png",
//     "scenario": "Eva and Alex have been invited to a wedding. They're figuring out the logistics.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "weddingdistance",
//     "img1": "eva_alex.png",
//     "img2": "weddingdistance_eva_alex.png",
//     "img_phone": "phone_309.2.png",
//     "scenario": "Eva and Alex have been invited to a wedding. They're figuring out the logistics.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "weddingdistance",
//     "img1": "eva_alex.png",
//     "img2": "weddingdistance_eva_alex.png",
//     "img_phone": "phone_318.2.png",
//     "scenario": "Eva and Alex have been invited to a wedding. They're figuring out the logistics.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "weddingdistance",
//     "img1": "eva_alex.png",
//     "img2": "weddingdistance_eva_alex.png",
//     "img_phone": "phone_767.2.png",
//     "scenario": "Eva and Alex have been invited to a wedding. They're figuring out the logistics.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },

// // 8. Context: fEva/Rachelg and fAlex/Arthurg want to go visit a friend and need to figure out
// // how far she lives from where they are.
// // fEva/Rachelg : So, how far is her hometown?
// // fAlex/Arthurg: It’s 300 miles away.
// // Match: f300.1/300.0g; NNM: 295.1; NM: 288.1; MisMatch: 588.1

  {
    "domain": "distance",
    "item": "friendvisit",
    "scenario_ra": "Rachel and Arthur want to go visit a friend and need to figure out how far she lives from where they are.",
    "question_ra": "Which phone is Arthur looking at in the picture?",
    "scenario_ea": "Eva and Alex want to go visit a friend and need to figure out how far she lives from where they are.",
    "question_ea": "Which phone is Alex looking at in the picture?"
  }]
//   {
//     "item": "friendvisit",
//     "img1": "rachel_arthur.png",
//     "img2": "friendvisit_rachel_arthur.png",
//     "img_phone": "phone_295.1.png",
//     "scenario": "Rachel and Arthur want to go visit a friend and need to figure out how far she lives from where they are.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "friendvisit",
//     "img1": "rachel_arthur.png",
//     "img2": "friendvisit_rachel_arthur.png",
//     "img_phone": "phone_288.1.png",
//     "scenario": "Rachel and Arthur want to go visit a friend and need to figure out how far she lives from where they are.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "friendvisit",
//     "img1": "rachel_arthur.png",
//     "img2": "friendvisit_rachel_arthur.png",
//     "img_phone": "phone_588.1.png",
//     "scenario": "Rachel and Arthur want to go visit a friend and need to figure out how far she lives from where they are.",
//     "question": "Which phone is Arthur looking at in the picture?"
//   },
//   {
//     "item": "friendvisit",
//     "img1": "eva_alex.png",
//     "img2": "friendvisit_eva_alex.png",
//     "img_phone": "phone_300.1.png",
//     "scenario": "Eva and Alex want to go visit a friend and need to figure out how far she lives from where they are.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "friendvisit",
//     "img1": "eva_alex.png",
//     "img2": "friendvisit_eva_alex.png",
//     "img_phone": "phone_295.1.png",
//     "scenario": "Eva and Alex want to go visit a friend and need to figure out how far she lives from where they are.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "friendvisit",
//     "img1": "eva_alex.png",
//     "img2": "friendvisit_eva_alex.png",
//     "img_phone": "phone_288.1.png",
//     "scenario": "Eva and Alex want to go visit a friend and need to figure out how far she lives from where they are.",
//     "question": "Which phone is Alex looking at in the picture?"
//   },
//   {
//     "item": "friendvisit",
//     "img1": "eva_alex.png",
//     "img2": "friendvisit_eva_alex.png",
//     "img_phone": "phone_588.1.png",
//     "scenario": "Eva and Alex want to go visit a friend and need to figure out how far she lives from where they are.",
//     "question": "Which phone is Alex looking at in the picture?"
//   }]






//FILLERS

var old_fills =

// Context: It's snowing, and Becky and Tyler are figuring out if public transit has been impacted.
// Becky : Hey, are any of the lines delayed?
// Tyler: Some of them are.
// L1: delayed L2: delayed L3: on time

  [{
    "item": "snow",
    "interlocutors": "bt.png",
    "speech": "snow_bt.png",
    "phone": "phone_snow.png",
    "scenario": "It's snowing, and Becky and Tyler are figuring out if public transit has been impacted.",
    "question": "Which phone is Tyler looking at in the picture?"
  },

// Context: Becky and Tyler are visiting a friend downstate and want to avoid paying tolls.
// Becky : Hey, do we have to pay tolls?
// Tyler: Some routes are toll free.
// Route 1: free Route 2: toll Route 3: free

  {
    "item": "downstate",
    "interlocutors": "bt.png",
    "speech": "downstate_bt.png",
    "phone": "phone_downstate.png",
    "scenario": "Becky and Tyler are visiting a friend downstate and want to avoid paying tolls.",
    "question": "Which phone is Tyler looking at in the picture?"
  },

// Context: Becky and Tyler want to go for a bike ride in a park out of town.
// Becky : Hey, is it possible to take our bike on the train?
// Tyler: It's possible on some trains.
// Train 1: yes Train 2: yes Train 3: no

  {
    "item": "bikeride",
    "interlocutors": "bt.png",
    "speech": "bikeride_bt.png",
    "phone": "phone_bikeride.png",
    "scenario": "Becky and Tyler want to go for a bike ride in a park out of town.",
    "question": "Which phone is Tyler looking at in the picture?"
  },

// Context: Becky and Tyler are considering some hotels for a weekend out of town.
// Becky : Are any of these hotels pet-friendly?
// Tyler: Some of them are.
// Hotel 1: yes Hotel 2: yes Hotel 3: no

  {
    "item": "weekendhotel",
    "interlocutors": "bt.png",
    "speech": "weekendhotel_bt.png",
    "phone": "phone_weekendhotel.png",
    "scenario": "Becky and Tyler are considering some hotels for a weekend out of town.",
    "question": "Which phone is Tyler looking at in the picture?"
  },

// Context: Becky and Tyler have been recommended three restaurants.
// Becky : Are any of these restaurants vegan friendly?
// Tyler: Some of them are.
// Rest 1: yes Rest 2: no Rest 3: yes

  {
    "item": "threerestaurants",
    "interlocutors": "bt.png",
    "speech": "threerestaurants_bt.png",
    "phone": "phone_threerestaurants.png",
    "scenario": "Becky and Tyler have been recommended three restaurants.",
    "question": "Which phone is Tyler looking at in the picture?"
  },

// Context: Becky and Tyler just moved to a new city. They have a list of cafes they want to try.
// Becky : Do these cafes have wi-fi?
// Tyler: Some of them do.
// Cafe 1: yes Cafe 2: no Cafe 3: yes

  {
    "item": "cafes",
    "interlocutors": "bt.png",
    "speech": "cafes_bt.png",
    "phone": "phone_cafes.png",
    "scenario": "Becky and Tyler just moved to a new city. They have a list of cafes they want to try.",
    "question": "Which phone is Tyler looking at in the picture?"
  },

// Context: Tyler is looking to cook something new and has a few recipes in mind.
// Becky : Are these recipes gluten free?
// Tyler: Some of them are.
// Rec 1: yes Rec 2: yes Rec 3: no

  {
    "item": "recipes",
    "interlocutors": "bt.png",
    "speech": "recipes_bt.png",
    "phone": "phone_recipes.png",
    "scenario": "Tyler is looking to cook something new and has a few recipes in mind.",
    "question": "Which phone is Tyler looking at in the picture?"
  },

// Context: Becky and Tyler are on a vacation trip and want to go to the beach.
// Becky : Do any of these beaches allow smoking?
// Tyler: Some of them do.
// Beach 1: yes Beach 2: yes Beach 3: no

  {
    "item": "beach",
    "interlocutors": "bt.png",
    "speech": "beach_bt.png",
    "phone": "phone_beach.png",
    "scenario": "Becky and Tyler are on a vacation trip and want to go to the beach.",
    "question": "Which phone is Tyler looking at in the picture?"
  },

// Context: Becky and Tyler want to book a hotel for a business trip.
// Becky : Do any of these hotels have cable TV?
// Tyler: Some of them do.
// Hotel 1: yes Hotel 2: no Hotel 3: yes

  {
    "item": "business",
    "interlocutors": "bt.png",
    "speech": "business_bt.png",
    "phone": "phone_business.png",
    "scenario": "Becky and Tyler want to book a hotel for a business trip.",
    "question": "Which phone is Tyler looking at in the picture?"
  },

// Context: Becky and Tyler are looking for AirBnB apartments.
// Becky : Do any of these have in-unit wash and dry?
// Tyler: Some of them do.
// Apt 1: yes Apt 2: yes Apt 3: no

  {
    "item": "airbnb",
    "interlocutors": "bt.png",
    "speech": "airbnb_bt.png",
    "phone": "phone_airbnb.png",
    "scenario": "Becky and Tyler are looking for AirBnB apartments.",
    "question": "Which phone is Tyler looking at in the picture?"
  },

// Context: Becky and Tyler want to go on a 3 day backpacking trip.
// Becky : Do these parks allow camping?
// Tyler: Some of them do.
// Park 1: yes Park 2: yes Park 3: no

  {
    "item": "backpacking",
    "interlocutors": "bt.png",
    "speech": "backpacking_bt.png",
    "phone": "phone_backpacking.png",
    "scenario": "Becky and Tyler want to go on a 3 day backpacking trip.",
    "question": "Which phone is Tyler looking at in the picture?"
  },

// Context: Becky and Tyler want to take their grandpa fishing.
// Becky : Are these lakes wheelchair accessible?
// Tyler: Some of them are.
// Lake 1: no Lake 2: no Lake 3: no

  {
    "item": "grandpa",
    "interlocutors": "bt.png",
    "speech": "grandpa_bt.png",
    "phone": "phone_grandpa.png",
    "scenario": "Becky and Tyler want to take their grandpa fishing.",
    "question": "Which phone is Tyler looking at in the picture?"
  },

// Context: Becky and Tyler are apartment hunting. They're visiting three places today.
// Becky : Do these apartments have a parking garage?
// Tyler: Some of them do.
// Apt 1: no Apt 2: no Apt 3: no

  {
    "item": "apartments",
    "interlocutors": "bt.png",
    "speech": "apartments_bt.png",
    "phone": "phone_apartments.png",
    "scenario": "Becky and Tyler are apartment hunting. They're visiting three places today.",
    "question": "Which phone is Tyler looking at in the picture?"
  },

// Context: Becky and Tyler want to go camping on a lake. They have several options.
// Becky : Can you fish in these lakes?
// Tyler: You can on some of them.
// Lake 1: no Lake 2: no Lake 3: no

  {
    "item": "lake",
    "interlocutors": "bt.png",
    "speech": "lake_bt.png",
    "phone": "phone_lake.png",
    "scenario": "Becky and Tyler want to go camping on a lake. They have several options.",
    "question": "Which phone is Tyler looking at in the picture?"
  },

// Context: Becky and Tyler are browsing options for eating outside.
// Becky : Do any of these restaurants allow smoking?
// Tyler: Some of them do.
// Rest 1: no Rest 2: no Rest 3: no

  {
    "item": "eating",
    "interlocutors": "bt.png",
    "speech": "eating_bt.png",
    "phone": "phone_eating.png",
    "scenario": "Becky and Tyler are browsing options for eating outside.",
    "question": "Which phone is Tyler looking at in the picture?"
  },

// Context: Becky and Tyler are looking for tickets for a game.
// Becky : Do any of these sectors have tickets left?
// Tyler: Some of them do.
// Sector 1: no Sector 2: no Sector 3: no

  {
    "item": "tickets",
    "interlocutors": "bt.png",
    "speech": "tickets_bt.png",
    "phone": "phone_tickets.png",
    "scenario": "Becky and Tyler are looking for tickets for a game.",
    "question": "Which phone is Tyler looking at in the picture?"
  },

// Context: Becky and Tyler are looking for a venue for an event.
// Becky : Are these venues available for our dates?
// Tyler: Some of them are.
// Venue 1: yes Venue 2: yes Venue 3: yes

  {
    "item": "event",
    "interlocutors": "bt.png",
    "speech": "event_bt.png",
    "phone": "phone_event.png",
    "scenario": "Becky and Tyler are looking for a venue for an event.",
    "question": "Which phone is Tyler looking at in the picture?"
  },

// Context: Becky and Tyler are trying to rent a van.
// Becky : Do any of these rentals have a van available?
// Tyler: Some of them do.
// Rent 1: yes Rent 2: yes Rent 3: yes

  {
    "item": "van",
    "interlocutors": "bt.png",
    "speech": "van_bt.png",
    "phone": "phone_van.png",
    "scenario": "Becky and Tyler are looking for a venue for an event.",
    "question": "Which phone is Tyler looking at in the picture?"
  },

// Context: Becky and Tyler are looking for hotels for a conference out of state.
// Becky : Do any of these hotels have a gym?
// Tyler: Some of them do.
// Hotel 1: yes Hotel 2: yes Hotel 3: yes

  {
    "item": "conference",
    "interlocutors": "bt.png",
    "speech": "conference_bt.png",
    "phone": "phone_conference.png",
    "scenario": "Becky and Tyler are looking for hotels for a conference out of state.",
    "question": "Which phone is Tyler looking at in the picture?"
  },

// Context: Becky and Tyler have been recommended some restaurants in the area.
// Becky : Do any of these restaurants serve Italian food?
// Tyler: Some of them do.
// Rest 1: yes Rest 2: yes Rest 3: yes

  {
    "item": "arearestaurants",
    "interlocutors": "bt.png",
    "speech": "arearestaurants_bt.png",
    "phone": "phone_arearestaurants.png",
    "scenario": "Becky and Tyler have been recommended some restaurants in the area.",
    "question": "Which phone is Tyler looking at in the picture?"
  },

// Context: Becky and Tyler are visiting a new town. There are some bars nearby.
// Becky : Do any of these bars have happy hour?
// Tyler: Some of them do.
// Bar 1: yes Bar 2: yes Bar 3: yes

  {
    "item": "bars",
    "interlocutors": "bt.png",
    "speech": "bars_bt.png",
    "phone": "phone_bars.png",
    "scenario": "Becky and Tyler are visiting a new town. There are some bars nearby.",
    "question": "Which phone is Tyler looking at in the picture?"
  },

// Context: Becky and Tyler are planning a trip out of town.
// Becky : Do these trains have wi-fi?
// Tyler: Some of them do.
// Train 1: yes Train 2: yes Train 3: yes

  {
    "item": "outoftown",
    "interlocutors": "bt.png",
    "speech": "outoftown_bt.png",
    "phone": "phone_outoftown.png",
    "scenario": "Becky and Tyler are planning a trip out of town.",
    "question": "Which phone is Tyler looking at in the picture?"
  },

// Context: Becky and Tyler are looking for a new apartment. They narrowed down their list to three.
// Becky : Do any of these have in-unit wash and dry?
// Tyler: Some of them do.
// Apt 1: yes Apt 2: yes Apt 3: yes

  {
    "item": "newapartment",
    "interlocutors": "bt.png",
    "speech": "newapartment_bt.png",
    "phone": "phone_newapartment.png",
    "scenario": "Becky and Tyler are looking for a new apartment. They narrowed down their list to three.",
    "question": "Which phone is Tyler looking at in the picture?"
  },

// Context: Becky and Tyler are looking to buy a car. They have three options in mind.
// Becky : Are any of these cars hybrid?
// Tyler: Some of them are.
// Car 1: yes Car 2: yes Car 3: yes

  {
    "item": "car",
    "interlocutors": "bt.png",
    "speech": "car_bt.png",
    "phone": "phone_car.png",
    "scenario": "Becky and Tyler are looking to buy a car. They have three options in mind.",
    "question": "Which phone is Tyler looking at in the picture?"
  }]