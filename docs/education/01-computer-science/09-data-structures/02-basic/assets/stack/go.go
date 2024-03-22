package main

type Stack struct {
	elements []interface{}
}

func (s *Stack) Push(item interface{}) {
	s.elements = append(s.elements, item)
}

func (s *Stack) Pop() (interface{}, bool) {
	if len(s.elements) == 0 {
		return nil, false
	} else {
		index := len(s.elements) - 1
		element := s.elements[index]
		s.elements = s.elements[:index]
		return element, true
	}
}

func (s *Stack) Peek() (interface{}, bool) {
	if len(s.elements) == 0 {
		return nil, false
	} else {
		index := len(s.elements) - 1
		return s.elements[index], true
	}
}
