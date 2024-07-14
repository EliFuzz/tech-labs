import struct

def float_as_binary_string(float_number, byte_length):
    number_as_binary_string = ""
    if byte_length == 4:
        number_as_binary_string = format(struct.unpack('<I', struct.pack('<f', float_number))[0], '032b')
    elif byte_length == 8:
        number_as_binary_string = format(struct.unpack('<Q', struct.pack('<d', float_number))[0], '064b')
    return number_as_binary_string
