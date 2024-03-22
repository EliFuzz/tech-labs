package main

func cartesianProduct(arrays [][]interface{}) [][]interface{} {
    if len(arrays) == 0 {
        return [][]interface{}{}
    }

    result := [][]interface{}{{}}

    for _, array := range arrays {
        var temp [][]interface{}
        for _, item := range array {
            for _, res := range result {
                t := append(res[:len(res):len(res)], item)
                temp = append(temp, t)
            }
        }
        result = temp
    }

    return result
}
