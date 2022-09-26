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
const is_integer = (n) => {
  return n % 1 == 0;
};
const integer_numbers_counter = () => {
  let numbers = [];
  let counter = 0;
  let total_numbers = parseInt(
    prompt(`digite quantos números você quer testar`)
  );
  let last_number = prompt(`digite um número final`);

  for (let i = 1; i <= total_numbers; i++) {
    let number_typed = parseFloat(
      prompt(`digite um número: ${i}/${total_numbers}`)
    );
    numbers.push(number_typed);
  }
  for (const key in numbers) {
    if (!is_integer(numbers[key])) continue;
    if (numbers[key] < 1 || numbers[key] > last_number) continue;
    counter++;
  }
  alert(
    `Números digitados: ${numbers} \n Entre 1 e ${last_number} tem ${counter} número(s) inteiro(s)`
  );
};
const quick_sort = () => {};
