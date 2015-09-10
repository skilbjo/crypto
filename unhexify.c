#include <stdio.h>

int main(int argc, char **argv) {
  unsigned int c;
  while (1 == scanf("%x", &c))
    putchar(c);
  return 0;
}