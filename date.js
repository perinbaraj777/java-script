var month_name=function(date){
    month=["january","febraury","march","april","may","june","jully","august","september","octomber","november","december"]
    return month[date.getMonth()];
  };
    console.log(month_name(new Date("03-04-2000")));
  