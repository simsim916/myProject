import java.util.Random;

public class mine{
    public static void main(String[] args) {
        Random random = new Random();
        int[][] boom = new int[9][9];

        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                boom[i][j] = 0;
            }
        }
        for (int i = 0; i < 10; i++) {
            int positionX = random.nextInt(8);
            int positionY = random.nextInt(8);
            boom[positionX][positionY] = 9;
            // if (positionX-1 >= 0) {
            //     if (positionY-1 >= 0) {
                    
            //         }
            //     }
        }
        
        do {
            System.out.println("0 1 2 3 4 5 6 7 8 9 ");
            for (int i = 0; i < 9; i++) {
                System.out.printf("%d ", i+1);
                for (int j = 0; j < 9; j++) {
                    System.out.printf("%s ", boom[i][j]);
                }
                System.out.println("");
            }
        } while (false);
    }
}