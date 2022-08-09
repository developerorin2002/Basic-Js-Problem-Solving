function gradFinder (number) {
    if(number >=80 && number<=100){
      return  console.log('A+');
    }else if (number < 80 && number>=60){
        return   console.log('B');
    }else if (number < 60 && number>=50 ){
        return  console.log('C');
    }else if (number < 50 && number>=40){
        return  console.log('D');
    }else if (number<40){
        return  console.log('F');
    };
};
const tomRes = 85;
const seeGrad = gradFinder(tomRes);
console.log(seeGrad);
















