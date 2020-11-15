package smartsale

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class Scenario20Items10Users extends Simulation {
    val users = 10
    val testDuration = 120
    val usersRampUpDuration = 10

    val requestPayload = """[{"name": "camiseta nike preta masculino"},{"name": "camiseta nike branca masculino"},{"name": "camiseta nike vermelha masculino"},{"name": "camiseta nike azul masculino"},{"name": "camiseta nike rosa masculino"},{"name": "camiseta nike preta feminino"},{"name": "camiseta nike branca feminino"},{"name": "camiseta nike vermelha feminino"},{"name": "camiseta nike azul feminino"},{"name": "camiseta nike rosa feminino"},{"name": "camiseta adidas preta masculino"},{"name": "camiseta adidas branca masculino"},{"name": "camiseta adidas vermelha masculino"},{"name": "camiseta adidas azul masculino"},{"name": "camiseta adidas rosa masculino"},{"name": "camiseta adidas preta feminino"},{"name": "camiseta adidas branca feminino"},{"name": "camiseta adidas vermelha feminino"},{"name": "camiseta adidas azul feminino"},{"name": "camiseta adidas rosa feminino"}]"""

    val httpProtocol = http.baseUrl("https://my-app-sleepy-mongoose-mt.cfapps.us10.hana.ondemand.com")
    val warm_up = scenario("Warm up")
      .during(10 seconds) {
          exec(http("warm_up")
            .post("/request")
            .body(StringBody(requestPayload)).asJson)
      }

    val scn = scenario("20 items - 10 users")
      .during(testDuration seconds) {
          exec(http("exec_rpm")
            .post("/request")
            .body(StringBody(requestPayload)).asJson)
      }

    val rpmScenarios = warm_up.pause(5 seconds).exec(scn)


    setUp(rpmScenarios
      .inject(
          rampUsers(users) during (usersRampUpDuration seconds))
      .throttle(
          reachRps(1000) in (testDuration seconds),
          holdFor((testDuration - usersRampUpDuration) seconds))
    ).protocols(httpProtocol)

    before {
        println("Simulation is about to start!")
    }

    after {
        println("Simulation is finished!")
    }
}
