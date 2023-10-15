//Information is divided into three categories: 
//financial, location, health and other.
//if No sensitive information, set to a perfect score of 10
// if is location informatin, 3 points will be deducted from the 10 points.

const perfectScore = 10;
const keywordSensetiveScore = {
    Road: 3,
    Avenue: 3,
    Boulevard: 3,
    Lane: 3,
    Alley: 3,
    street: 3,
    Condo: 3,
    apartment: 3,
    Company: 3,
    Corporation: 3,
    Diagnosis: 2,
    Treatment: 2,
    Recovery: 2,
    Therapy: 2,
    Medication: 2,
    Patient: 2,
    Medical: 2,
    hospital: 2,
    doctor: 2,
    clinic: 2,
    Bank: 1,
    credit: 1,
    debit: 1,
    Paycheck: 1,
    salary: 1,
    Wage: 1,
    Income: 1,
    Earnings: 1,
    Passport: 1,
    Insurance: 1
  };

function caculaterScore(string){
    //store the name of the keyword that appears
    const keywordArray = []
// Use a regular expression to split the text into words
    const words = string.match(/\b\w+\b/g);

    // Iterate over each word
    if (words) {
        words.forEach((word) => {
            for (const key in keywordSensetiveScore) {
                if (word === key) {
                    keywordArray.push(key)
                }
            }
        });
    }
    // keySore store the score of keyvalue
    const keyScore = []
    keywordArray.forEach(word => keyScore.push(keywordSensetiveScore[word]))
    const keyArrSorted = keyScore.sort((a, b) => b-a)

    //caculat the final score
    //If there are multiple keywords, 
    //the first one will be 100% deducted based on 10 points.
    //The weight model is set to 1/2n (starts from the second one)
    var sum = keyArrSorted[0];
    for ( let i = 1; i < keyArrSorted.length; i++){
        sum += keyArrSorted[i]/(2*i)
        if( sum > perfectScore){
            sum = perfectScore
            break;
        }
       
    }
    return (perfectScore - sum).toFixed(2)
}

const string = `Just bought a new house on Elm Street. Can't believe we're homeowners now! 🏡 #DreamHome.Renewed my health insurance policy with XYZ Insurance. Keeping my health in check! Just got my new driver's license today. 🚗 Time to hit the road! #NewDriver"
"Great news: I just received a promotion at work! Hard work pays off. #CareerGrowth.Attending a family reunion in New Orleans this weekend. Can't wait to see everyone.Starting my new job at XYZ Corporation tomorrow as a Senior Software Engineer. Super excited about this opportunity."
Prescription refill for my medication today. It's been a lifesaver! #HealthIsWealth
.Just received my new credit card from ABC Bank.
Visited the doctor for a check-up. Cholesterol levels are improving. Stay healthy, folks!`

let score = caculaterScore(string)
console.log(score)