function scuberGreetingForFeet(feet){
  // Write your code here!
  if (feet<=400){
    return "This one is on me!";
  } else if(feet>400 && feet<=2000){
    return "That will be twenty bucks.";
  } else if(feet>2000 & feet<=2500){
    return "I will gladly take your thirty bucks.";
  } else {
    return 'No can do.';
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  if(city==="NYC"){
    return "Ok, sounds good."
  } else{
    return "No go."
  }

}

function switchOnCharmFromTip(tip){
  // Write your code here!
  if (tip === "generous"){
    return 'Thank you so much.';
  } else if(tip === "not as generous"){
    return 'Thank you.';
  } else{
    return 'Bye.';
  }
  /*describe('switchOnCharmFromTip()', function () {
    it('should return "Thank you so much." if the tip is generous', function () {
      expect(switchOnCharmFromTip('generous')).to.equal('Thank you so much.');
    });

    it('should return "Thank you." if the tip is not as generous', function () {
      expect(switchOnCharmFromTip('not as generous')).to.equal('Thank you.');
    });

    it('should return "Bye." if anything else', function () {
      expect(switchOnCharmFromTip('thanks for everything')).to.equal('Bye.');
    });
  });
});
*/
}