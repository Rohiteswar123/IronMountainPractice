# 1)You can Pass multiple arguments in print function
# print("Hello","world","123") 

# 2)Unexpected Indent Error in Python
# if 3>2:          
#      print("abc")
#       print("bcd")

# 3) Dynamic Typing - Need not declare variables
# a=123
# b="ss"

# 4) semicolons are optional in Python with semicolons you can run in same line
# print("a");print("b");print("c");

# 5) By default Python always goes for newline but to end in same line use end parameter
# print("Hello World!", end=" ")
# print("I will print on the same line.")

# 6) Below line valid
# print("I am", 35, "years old.")

# 7) use type func to get type of x
# x="abc"
# print(type(x))

# 8) Python is case senstive a=5 and A = 5 are two diffrent variables

# 9) CamelCase - myNamePlace    PascalCase - myNamePlace  Snakecase my_name_place


# 10) Below lines are possible
# x,y,z= 1,2,3
# a=b=c=3
# d,e,f =['rohit','eswar','naveen']
# print(a,b,c,d,e,f,x,y,z)


# 11) Below code will give error both x,y can be string or number 
# x = 5
# y = "John"
# print(x + y)


#12) Observe Bhevaiour of scopes of variables
# x = "awesome"

# def myfunc():
#   x = "fantastic"
#   print("Python is " + x)

# myfunc()

# print("Python is " + x)


# 13) Using global keyword we can access inside
# x = "awesome"

# def myfunc():
#   global x
#   x = "fantastic"

# myfunc()

# print("Python is " + x)


# 14) To get a random number
# import random
# print(random.randrange(1, 10))

# 15) Use int() , float() ,str() to cast

# 16) Use """  """  or '''  '''  for multiline strings


# 17) Rember slicing starts form index 0 
# a = "Hello, World!"
# print(a[1])

# 18) use len() to get length

# 19) Below is possible
# for x in "banana":
#   print(x)


# 20) in can be used to check returns boolean
# txt = "The best things in life are free!"
# print('The' in txt)

# 21) slicing Rember that ending index is not include even -1 [2:] and [2:-1] are diffrent 
# b = "Hello, World!"
# print(b[2:5]) 
# print(b[:5])
# print(b[2:])
# print(b[-3:-1])


# 22) String Operations
# a = "Hello, World!"
# print(a.upper())
# print(a.lower())
# print(a.strip()) #Removes white Spaces
# print(a.replace("He", 'J')) #Replaces letters "He"
# print(a.split(",")) #split into list

# 23) String Concat  Both are possible
# a = "Hello"
# b = "World"
# c = a + " " + b
# d = a+b
# print(c,d)

# 24) Fstring to combine number in String
# age = 36.09999
# txt = f"My name is John, I am {age:.3f}"
# print(txt)

# 25) You can perfom math operation in placeholder
# txt = f"The price is {20 * 59} dollars"
# print(txt)

# 26) We can Use Escape Charcters to run below code
# txt = "We are the so-called \"Vikings\" from the north."


# 27) String methods
# a="aRohit"
# print(a.capitalize()) # starting letter to captial
# isnum ,isalpha , isdigit , islower ,isnumric , count , index ,isupper ,rstrip , lstrip are few more methods


# 28) bool is used to evalualte below return False
# print(bool(False))
# print(bool(None))
# print(bool(0))
# print(bool(""))
# print(bool(()))
# print(bool([]))
# print(bool({}))

# 29) isinstance
# x = 200
# print(isinstance(x, int))


# 30) operator / returns float // floor retuns int value



# 31) Go Through this example
# numbers = [1, 2, 3, 4, 5]
# count = len(numbers)
# if count > 3:
#     print(f"List has {count} elements")

# if (count := len(numbers)) > 3:
#     print(f"List has {count} elements")


# 32) Difference Between is and ==
# is - Checks if both variables point to the same object in memory
# == - Checks if the values of both variables are equal
# x = [1, 2, 3]
# y = [1, 2, 3]

# print(x == y)
# print(x is y)


# 33)  and , or , not are used in pyhton  "is" and "in" are used for  identiy and membership respectively
# 34)  & , | , << left shift , >> right shift , ^ Xor , ~ invert


# Operator Precedence Left to RIght if same precedence
# ()
# ** expo
# +x , -x , ~x 
# * ,// ,/ , %
# +,-
# << ,>>
# &
# ^
# Comparisons, identity, and membership operators	
# Logical NOT	
# AND	
# OR

