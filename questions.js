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
const mdc = () => {
  let numbers = [];
  for (let i = 1; i <= 2; i++) {
    let number_typed = parseInt(prompt(`digite 2 números inteiros ${i}/${2}`));
    numbers.push(number_typed);
  }
  let [x, y] = numbers;
  if (x < y) {
    let aux = x;
    x = y;
    y = aux;
  }
  let has_mdc = false;
  let mdc = 0;
  for (let i = 0; !has_mdc; i++) {
    let divider = x - i;
    if (x % divider === 0 && y % divider === 0) {
      mdc = divider;
      has_mdc = true;
    }
  }
  alert(`MDC de ${numbers[0]} e ${numbers[1]} é ${mdc}`);
};
const integer_numbers_counter = () => {
  let number = parseInt(prompt("Digite um número"));
  let integer_numbers = Math.abs(number.toFixed(0));
  alert(`tem ${integer_numbers} números inteiros entre entre 1 e ${number} `);
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
  let numbers_no_sorted = [...numbers];
  let [pivot] = numbers;
  let left = 1;
  for (let i = 1; i < numbers.length; i++) {
    if (pivot >= numbers[i]) {
      let aux = numbers[left];
      numbers[left] = numbers[i];
      numbers[i] = aux;
      left++;
    }
  }
  let aux = numbers[left - 1];
  numbers[left - 1] = pivot;
  numbers[0] = aux;
  for (let i = 0; i < pivot; i++) {
    if (numbers[i] > numbers[i + 1]) {
      let aux = numbers[i];
      numbers[i] = numbers[i + 1];
      numbers[i + 1] = aux;
    }
  }
  for (let i = pivot; i < numbers.length; i++) {
    if (numbers[i] > numbers[i + 1]) {
      let aux = numbers[i];
      numbers[i] = numbers[i + 1];
      numbers[i + 1] = aux;
    }
  }
  alert(
    `Sequência digitada: \n ${numbers_no_sorted} \n Sequência em ordem crescente: \n ${numbers}`
  );
};
