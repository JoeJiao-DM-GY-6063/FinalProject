int buttonPin1 = 2; //red
int buttonPin2 = 3; //yelloww

void setup() {
  Serial.begin(9600);
  pinMode(buttonPin1, INPUT);
  pinMode(buttonPin2, INPUT);
}

void loop() {

  int buttonState1 = digitalRead(buttonPin1); //left
  int buttonState2 = digitalRead(buttonPin2); //right

 
  Serial.print(buttonState1);
  Serial.print(",");
  Serial.println(buttonState2);

 delay(100);
}
