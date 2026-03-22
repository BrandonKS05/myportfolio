#include <stdlib.h>

#define DIM 3

double dotproduct(int n, double *A, double *B) {
    double sum = 0;
    for (int i = 0; i < n; i++) {
        sum += A[i] * B[i];
    }
    return sum;
}

void add(int m, int n, double *A, double *B, double *Y) {
    for (int idx = 0; idx < m * n; idx++) {
        Y[idx] = A[idx] + B[idx];
    }
}

void linearcomb(int m, int n, double sa, double sb,
                double *A, double *B, double *Y) {
    for (int idx = 0; idx < m * n; idx++) {
        Y[idx] = sa * A[idx] + sb * B[idx];
    }
}

void transpose(int m, int n, double *A, double *A_t) {
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            A_t[j * m + i] = A[i * n + j];
        }
    }
}

int equal(int m, int n, double *A, double *B) {
    for (int idx = 0; idx < m * n; idx++) {
        if (A[idx] != B[idx]) return 0;
    }
    return 1;
}

/* A: m1×n1m2, B: n1m2×n2, Y: m1×n2 */
void mult(int m1, int n1m2, int n2, double *A, double *B, double *Y) {
    for (int i = 0; i < m1; i++) {
        for (int j = 0; j < n2; j++) {
            double sum = 0;
            for (int k = 0; k < n1m2; k++) {
                sum += A[i * n1m2 + k] * B[k * n2 + j];
            }
            Y[i * n2 + j] = sum;
        }
    }
}

double *newMatrix(int m, int n) {
    return (double *)malloc(m * n * sizeof(double));
}

double *newIdentityMatrix(int n) {
    double *mat = newMatrix(n, n);
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            mat[i * n + j] = (i == j);
        }
    }
    return mat;
}

int main(void){
    double v1[3] = {4, 2, 1}; // 1x3 vector
    double v2[3] = {1, -2, 3}; // 1x3 vector

    double dp = dotproduct(3, v1, v2); // compute v1 dot v2

    double m1[9] = {0, 0, 2, 0, 0, 0, 2, 0, 0}; // 3x3 matrix
    double *m2 = newIdentityMatrix(3); // 3x3 identity matrix
    double *m3 = newMatrix(3, 3); // 3x3 matrix

    double m4[6] = {2, 3, 4, 5, 6, 7}; // 3x2 matrix
    double *m5 = newMatrix(3, 2); // 3x2 matrix

    double m6[6] = {6, 2, 5, 8, 2, 7}; // 2x3 matrix
    double *m7 = newMatrix(3, 2); // 3x2 matrix

    double *m8 = newMatrix(3, 2); // 3x2 matrix

    double expected[6] = {2, 1, 0, 1, 0, -1}; // expected result matrix

    int eq;

    add(3, 3, m1, m2, m3);                 // m3 = m1 + m2
    mult(3, 3, 2, m3, m4, m5);             // m5 = m3 * m4
    transpose(2, 3, m6, m7);               // m7 = m6^T
    linearcomb(3, 2, 1, 1 - dp, m5, m7, m8); // m8 = m5 + (1-dp)*m7

    eq = equal(3, 2, m8, expected);        // check result

    return eq; // return 1 if correct, 0 otherwise
}