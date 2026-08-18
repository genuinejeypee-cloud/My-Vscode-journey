import java.util.Scanner;

public class lab4 {
    public static void main(String[] args) {
        
        Scanner console = new Scanner(System.in);
        
        double hours;
        double rate;
        double salary;
        
        System.out.println("Enter total hours worked in a week: ");
        hours = console.nextDouble();
        
        System.out.println("Enter hourly pay rate (in pesos and cents): ");
        rate = console.nextDouble();
        
        salary = hours * rate;
        
        System.out.println("\n--- SALARY SUMMARY ---");
        System.out.println("Hours Worked: " + hours);
        System.out.println("Hourly Pay Rate: ₱" + rate);
        System.out.println("Total Weekly Gross Salary: ₱" + salary);
    }
}