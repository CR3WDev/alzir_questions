package java_questions;

import java.util.ArrayList;
import java.util.Scanner;

class HelloWorld {
    static void is_prime_number() {
        System.out.println("Digite um número para checar se é primo");
        Scanner scanner = new Scanner(System.in);
        Integer n = scanner.nextInt();
        boolean is_prime_number = true;
        for (int i = 1; n - 1 > i; i++) {
            if (n % (i + 1) == 0) is_prime_number = false;
        }
        if(is_prime_number) {
            System.out.println("É um número primo");
        }else {
            System.out.println("Não é um número primo");
        }
    }
    static void sum_all_numbers() {
        System.out.println("Digite quantos números deseja somar");
        Scanner scanner = new Scanner(System.in);
        Integer total_numbers = scanner.nextInt();
        Double[] numbers = new Double[total_numbers];
        for (int i = 0; i < total_numbers; i++) {
            System.out.println("digite os numeros para se somar " + (i+1)+"/"+total_numbers);
            Scanner scanner2 = new Scanner(System.in);
            numbers[i] = scanner2.nextDouble();
        }
        double sum_numbers = 0;
        for(int i = 0;i < total_numbers;i++){
            sum_numbers = numbers[i] + sum_numbers;
        }
        System.out.println("A soma dos valores é " + sum_numbers);
    }
    static void fibonacci() {
        System.out.println("Quantos números de fibonacci você quer?");
        Scanner scanner = new Scanner(System.in);
        Integer total_numbers = scanner.nextInt();
        ArrayList<Integer> numbers_fibonacci = new ArrayList<Integer>();
        numbers_fibonacci.add(0);
        numbers_fibonacci.add(1);
        Integer numbers_to_add = total_numbers - 2;
        String fibonacci_string = "Sequência: ";
        if (total_numbers >= 3) {
          for (Integer i = 0; i < numbers_to_add; i++) {
            Integer next_number = numbers_fibonacci.get(i) + numbers_fibonacci.get(i + 1);
            numbers_fibonacci.add(next_number);
          }
        }
        if (total_numbers == 1) numbers_fibonacci.remove(1);
        for(Integer i = 0;i < numbers_fibonacci.size();i++) {
          fibonacci_string = fibonacci_string +  numbers_fibonacci.get(i) + " ";
        }
        System.out.println(fibonacci_string);
    }

    public static void mdc() {
        ArrayList<Integer> numbers = new ArrayList<Integer>();
        for (Integer i = 1; i <= 2; i++) {
            System.out.println("digite 2 números inteiros " + i + "/2");
            Scanner scanner = new Scanner(System.in);
            Integer number_typed = scanner.nextInt();
            numbers.add(number_typed);
        }
        Integer x = 0;
        Integer y = 0;
        if(numbers.get(0) < numbers.get(1)) {
            x = numbers.get(1);
            y = numbers.get(0);
        }else {
            y = numbers.get(1);
            x = numbers.get(0);
        }
        Boolean has_mdc = false;
        Integer mdc = 0;
        for (Integer i = 0; !has_mdc; i++) {
          Integer divider = x - i;
          if (x % divider == 0 && y % divider == 0) {
            mdc = divider;
            has_mdc = true;
          }
        }
        System.out.println("Seu mdc é:" + mdc);
    }
    public static boolean is_integer(Double number) {
      return number % 1 == 0;
    }
    public static void integer_numbers_counter() {
      ArrayList<Double> numbers = new ArrayList<Double>();
      Integer counter = 0;
      System.out.println("digite quantos números você quer testar");
      Scanner scanner = new Scanner(System.in);
      Integer total_numbers = scanner.nextInt();
      System.out.println("digite um número final");
      Scanner scanner2 = new Scanner(System.in);
      Integer last_number = scanner2.nextInt();

      for (int i = 0; i <= total_numbers; i++) {
        System.out.println("digite um número: " + i +"/" + total_numbers);
        Scanner scan = new Scanner(System.in);
        double number = scan.nextDouble();
        numbers.add(i, number);
      }
      for (int i = 0; i <= total_numbers; i++) {
        if (!is_integer(numbers.get(i))) continue;
        if (numbers.get(i) < 1 || numbers.get(i) > last_number) continue;
        counter ++;
      }
      System.out.println("Números digitados: " + numbers.toString() + "\nNúmeros entre 1 e "+last_number+ ": " + counter);
      // for (const key in numbers) {
      //   if (!is_integer(numbers[key])) continue;
      //   if (numbers[key] < 1 || numbers[key] > last_number) continue;
      //   counter++;
      // }
      // alert(
      //   `Números digitados: ${numbers} \n Entre 1 e ${last_number} tem ${counter} número(s) inteiro(s)`
      // );
    }
    public static void quick_sort() {
       
    }
    public static void main(String[] args) {
        System.out.println(
            "Digite uma das opções \n" +
            "1 - Verificar se um número é primo \n" +
            "2 - Somar valores de um array \n" +
            "3 - Sequência de fibonacci \n" +
            "4 - Calcular MDC \n" + 
            "5 - Calcular numeros inteiros entre 1 e x \n" +
            "6 - Quick Sort \n"
            );
            Scanner scanner = new Scanner(System.in);
            Integer option = scanner.nextInt();
            if(option == 1) is_prime_number();
            if(option == 2) sum_all_numbers();
            if(option == 3) fibonacci();
            if(option == 4) mdc();
            if(option == 5) integer_numbers_counter();
            if(option == 6) quick_sort();
    }
}