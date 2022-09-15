const is_prime = () => {
  let n = prompt("Digite um numero para checar se é primo");
  let is_prime_number = true;
  for (let i = 1; n - 1 > i; i++) {
    if (n % (i + 1) === 0) is_prime_number = false;
  }
  const text = is_prime_number ? "É um número primo" : "Não é um número primo";
  alert(text);
};
const sum_all_numbers = () => {
  let numbers = [];
  let total_numbers = prompt("Digite quantos números deseja somar");
  for (let i = 1; i <= total_numbers; i++) {
    let number_typed = parseInt(
      prompt(`digite os numeros para se somar ${i}/${total_numbers}`)
    );
    numbers.push(number_typed);
  }
  let sum_numbers = 0;
  numbers.map((a) => {
    sum_numbers = a + sum_numbers;
  });
  alert(sum_numbers);
};
const fibonacci = () => {
  let n = prompt("Quantos números de fibonacci você quer?");
  let numbers_fibonacci = [0, 1];
  let numbers_to_add = n - 2;
  let fibonacci_string = "Sequência: ";
  if (n >= 3) {
    for (let i = 0; i < numbers_to_add; i++) {
      let next_number = numbers_fibonacci[i] + numbers_fibonacci[i + 1];
      numbers_fibonacci.push(next_number);
    }
  }
  if (n == "1") numbers_fibonacci.pop();
  numbers_fibonacci.map((numbers) => {
    fibonacci_string = fibonacci_string + ` ${numbers}`;
  });
  alert(fibonacci_string);
};
const quick_sort = () => {
  let numbers = [];
  let total_numbers = prompt("Digite quantos números deseja somar");
  for (let i = 1; i <= total_numbers; i++) {
    let number_typed = parseInt(
      prompt(`digite os numeros para se somar ${i}/${total_numbers}`)
    );
    numbers.push(number_typed);
  }
  let [pivot] = numbers;
  for (let i = 0; i < numbers.length; i++) {
    console.log("teste");
  }
  console.log(pivot);
  console.log(numbers);
};
console.log("TESTE");
