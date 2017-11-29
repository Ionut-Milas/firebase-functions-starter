const paymentObjectSchema = {
  "required": ["eventId", "eventTitle", "eventDate", "noOfTickets", "location", "tickets", "ticketsBreakdown"],
  "properties": {
    "eventId": {
      "type": "string"
    },
    "eventTitle": {
      "type": "string"
    },
    "eventDate": {
      "type": "string"
    },
    "noOfTickets": {
      "type": "number"
    },
    "location": {
      "type": "string"
    },
    "ticketsBreakdown": {
      "items": {
        "required": ["id", "amount"],
        "properties": {
          "id": {
            "type": "string"
          },
          "amount": {
            "type": "number"
          }
        }
      }
    },
    "tickets": {
      "items": {
        "required": ["details", "ticketTypeKey"],
        "properties": {
          "details": {
            "required": ["email", "name", "phone", "surname"],
            "properties": {
              "email": {
                "type": "string"
              },
              "options": {
                "type": "object"
              },
              "phone": {
                "type": "string"
              },
              "surname": {
                "type": "string"
              }
            },
            "type": "object"
          },
          "ticketTypeKey": {
            "type": "string"
          },
          "properties": {
            "ticketId": {
              "type": "string"
            }
          }
        },
        "type": "object"
      },
      "type": "array"
    }
  },
  "type": "object"
};

module.exports = paymentObjectSchema;
