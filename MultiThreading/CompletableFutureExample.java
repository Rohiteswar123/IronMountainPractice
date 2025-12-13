import java.util.concurrent.CompletableFuture;

public class CompletableFutureExample {
    public static void main(String[] args) throws Exception {
        // Run a task asynchronously and return a result
        CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {
            try {
                Thread.sleep(1000); // Simulate a long-running task
            } catch (InterruptedException e) {
                throw new IllegalStateException(e);
            }
            return "Hello from CompletableFuture!";
        }).thenApply(result -> {
            // Process the result
            return result.toUpperCase();
        });

        // The main thread can continue doing other work...
        System.out.println("Main thread is not blocked.");

        // Block and get the result (usually done at the end of the pipeline)
        String result = future.get(); // get() method blocks
        System.out.println(result);
    }
}
