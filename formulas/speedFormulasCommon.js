export const speedFormulasCommon = {
    "meters per second": {
      "kilometers per hour": {
        formula: (value) => value * 3.6,
        description: "Multiply the value by 3.6 to convert meters per second to kilometers per hour."
      },
      "miles per hour": {
        formula: (value) => value * 2.23694,
        description: "Multiply the value by 2.23694 to convert meters per second to miles per hour."
      },
      "feet per second": {
        formula: (value) => value * 3.28084,
        description: "Multiply the value by 3.28084 to convert meters per second to feet per second."
      },
      "knots": {
        formula: (value) => value * 1.94384,
        description: "Multiply the value by 1.94384 to convert meters per second to knots."
      }
    },
    "kilometers per hour": {
      "meters per second": {
        formula: (value) => value / 3.6,
        description: "Divide the value by 3.6 to convert kilometers per hour to meters per second."
      },
      "miles per hour": {
        formula: (value) => value * 0.621371,
        description: "Multiply the value by 0.621371 to convert kilometers per hour to miles per hour."
      },
      "feet per second": {
        formula: (value) => value * 0.911344,
        description: "Multiply the value by 0.911344 to convert kilometers per hour to feet per second."
      },
      "knots": {
        formula: (value) => value * 0.539957,
        description: "Multiply the value by 0.539957 to convert kilometers per hour to knots."
      }
    },
    "miles per hour": {
      "meters per second": {
        formula: (value) => value / 2.23694,
        description: "Divide the value by 2.23694 to convert miles per hour to meters per second."
      },
      "kilometers per hour": {
        formula: (value) => value / 0.621371,
        description: "Divide the value by 0.621371 to convert miles per hour to kilometers per hour."
      },
      "feet per second": {
        formula: (value) => value * 1.46667,
        description: "Multiply the value by 1.46667 to convert miles per hour to feet per second."
      },
      "knots": {
        formula: (value) => value * 0.868976,
        description: "Multiply the value by 0.868976 to convert miles per hour to knots."
      }
    },
    "feet per second": {
      "meters per second": {
        formula: (value) => value / 3.28084,
        description: "Divide the value by 3.28084 to convert feet per second to meters per second."
      },
      "kilometers per hour": {
        formula: (value) => value / 0.911344,
        description: "Divide the value by 0.911344 to convert feet per second to kilometers per hour."
      },
      "miles per hour": {
        formula: (value) => value / 1.46667,
        description: "Divide the value by 1.46667 to convert feet per second to miles per hour."
      },
      "knots": {
        formula: (value) => value * 0.592484,
        description: "Multiply the value by 0.592484 to convert feet per second to knots."
      }
    },
    "knots": {
      "meters per second": {
        formula: (value) => value / 1.94384,
        description: "Divide the value by 1.94384 to convert knots to meters per second."
      },
      "kilometers per hour": {
        formula: (value) => value / 0.539957,
        description: "Divide the value by 0.539957 to convert knots to kilometers per hour."
      },
      "miles per hour": {
        formula: (value) => value / 0.868976,
        description: "Divide the value by 0.868976 to convert knots to miles per hour."
      },
      "feet per second": {
        formula: (value) => value / 0.592484,
        description: "Divide the value by 0.592484 to convert knots to feet per second."
      }
    }
  };
