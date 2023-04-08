class series {

    public static void main(String[] args) {

        int a = 1, b = 9, count = 0;
        System.out.println(b);
        for (int i = 1; i <= 100; i++) {
            a = i * 9;
            System.out.println(a);

            if (a % 10 == 9 || a / 10 == 9) {
                count++;

            }
            // System.out.println(count);

        }
        System.out.println(count);

    }
}
