def access_element(arr, index):
    return arr[index]

def update_element(arr, index, value):
    arr[index] = value

def find_length(arr):
    return len(arr)

def iterate_elements(arr):
    for element in arr:
        print(element)

def append_element(arr, value):
    arr.append(value)

def insert_element(arr, index, value):
    arr.insert(index, value)

def remove_element(arr, value):
    arr.remove(value)

def pop_element(arr, index):
    return arr.pop(index)

def search_element(arr, value):
    return value in arr

def index_of_element(arr, value):
    return arr.index(value)

def sort_array(arr):
    arr.sort()

def reverse_array(arr):
    arr.reverse()

def slice_array(arr, start, stop):
    return arr[start:stop]

def concatenate_arrays(arr1, arr2):
    return arr1 + arr2
