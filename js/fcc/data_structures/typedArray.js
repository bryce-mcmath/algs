/**
 * The size of the entire array, should be
 * the size of the type * length of the array
 */
const byteSize = 64;

/**
 * Creating the buffer using the byte size as
 * a limit
 */
const buffer = new ArrayBuffer(byteSize);

/**
 * Creating the array using the buffer
 */
const i32View = new Int32Array(buffer);
