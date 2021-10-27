

/*****SWITCH CASE--where in there are multiple conditions and results********/
//break statement is used so that other cases are not executed to save time.
let starRating =5;

switch (starRating) {
    case 1:
        console.log('worst');
        break;

    case 2:
        console.log('worse');
        break;

    case 3: 
        console.log('bad');
        break;

    case 4:
        console.log('better');
        break;

    case 5:
        console.log('best');
        break;

    default:
        console.log('Enter Appropriate Rating');

}