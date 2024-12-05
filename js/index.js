// RUMUS !!! ----------------------------------------------------
// const calcBmi = (weight, height) => {
//   const heightDecimal = (height / 100)
//   const bmiRumus = weight / (heightDecimal ** 2)
//   const result = (Math.round(bmiRumus * 10) / 10).toFixed(1)
//   return result
// }

// console.log(calcBmi(60, 167))
const radioGenderMale = document.querySelector("#pria").checked = true
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')
const inputAge = document.querySelector("#age")

const warningWeigt = document.querySelector(".warning_weight")
const warningAge = document.querySelector(".warning_age")
const warningHeight = document.querySelector(".warning_height")

const buttonCalc = document.querySelector(".btn_calc")
const buttonResetAll = document.querySelector(".btn_reset")

const message = document.querySelector("#msg")


// weight --------------------------------------------
let weight = inputWeight.value 
inputWeight.addEventListener("input", () => {
  const value = inputWeight.value
  const regex = /^[0-9]+$/
  const isNumber = regex.test(value)
  if(!isNumber){
    warningWeigt.textContent = "* harap masukan angka berat badan dengan benar"
  } else {
    warningWeigt.textContent = ""
  }
  weight = value
})

// age -------------------------------------------------

let age = inputAge.value
inputAge.addEventListener("input", () => {
  const value = inputAge.value
  const regex = /^[0-9]+$/
  const isNumber = regex.test(value)
  if(!isNumber){
    warningAge.textContent = "* harap masukan angka usia dengan benar"
  } else {
    warningAge.textContent = ""
  }
  age = value
})

// height -----------------------------------------------------

let height = inputHeight.value
inputHeight.addEventListener("input", () => {
  const value = inputHeight.value
  const regex = /^[0-9]+$/
  const isNumber = regex.test(value)
  if(!isNumber){
    warningHeight.textContent = "* harap masukan angka tinggi dengan benar"
  } else {
    warningHeight.textContent = ""
  }
  height = value
})

const msgArr = [
  {
    result: "kurang berat badan",
    message: "Hasil BMI < 18.5 Anda berada dalam kategori kekurangan berat badan Hubungi dokter lebih lanjut mengenai pola makan dan gizi yang baik untuk meningkatkan kesehatan"
  },
  {
    result: "normal",
    message: "Anda berada dalam kategori berat badan yang normal. Tetap pertahankan berat badan Anda dan jaga berat badan Anda dengan mengatur keseimbangan antara pola makan dan aktivitas fisik Anda. "
  },
  {
  
    result: "kelebihan berat badan",
    message: "hasil BMI 25.0 - 29 anda berada dalam kategori overweight  atau berat badan berlebih\n cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga"
  },
  {
    result: "obesitas",
    message: "Anda berada dalam kategori obesitas Usahakan untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan menjaga makan dan aktivitas fisik Segera kunjungi dokter untuk dilakukan pemeriksaan kesehatan lanjutan untuk mengetahui risiko yang Anda miliki terkait berat badan Anda."
  }
]



const resultNumber = document.querySelector("#result_number")
const resultText = document.querySelector("#result_text")
const resultMessage = document.querySelector("#msg")

const calcBmi = (weight, height) => {
  const heightDecimal = (height / 100)
  const bmiRumus = weight / (heightDecimal ** 2)
  const result = (Math.round(bmiRumus * 10) / 10).toFixed(1)
  resultNumber.textContent = result
  if(result < 18.5){
    resultText.textContent = msgArr[0].result
    resultMessage.textContent = msgArr[0].message
  } else if(result >= 18.5 && result <= 24.9){
    resultText.textContent = msgArr[1].result
    resultMessage.textContent = msgArr[1].message
  } else if(result >= 25.0 && result <= 29.9 ){
    resultText.textContent = msgArr[2].result
    resultMessage.textContent = msgArr[2].message
  } else if(result > 30) {
    resultText.textContent = msgArr[3].result
    resultMessage.textContent = msgArr[3].message
  } 
}

buttonCalc.addEventListener("click", () => {
  calcBmi(weight, height)
})