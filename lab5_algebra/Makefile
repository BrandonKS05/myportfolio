CC = cc
CFLAGS = -Wall -Wextra -std=c99 -O0 -g

lab5_algebra: main.c
	$(CC) $(CFLAGS) -o lab5_algebra main.c

.PHONY: run clean
run: lab5_algebra
	./lab5_algebra; echo "exit code: $$?"

clean:
	rm -f lab5_algebra
