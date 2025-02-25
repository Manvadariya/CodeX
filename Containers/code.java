import java.util.Scanner;

public class code {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("Enter three values:");
        
        String input1 = scanner.nextLine();
        String input2 = scanner.nextLine();
        String input3 = scanner.nextLine();
        
        System.out.println("You entered:");
        System.out.println(input1);
        System.out.println(input2);
        System.out.println(input3);
        
        scanner.close();
    }
}