package smartsale

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class Scenario10Items50Users extends Simulation {
    val users = 50
    val testDuration = 120
    val usersRampUpDuration = 10

    val requestPayload = """[ {"name": "camiseta preta masculino"}, {"name": "camiseta branca masculino"}, {"name": "camiseta vermelha masculino"}, {"name": "camiseta azul masculino"}, {"name": "camiseta rosa masculino"}, {"name": "camiseta preta feminino"}, {"name": "camiseta branca feminino"}, {"name": "camiseta vermelha feminino"}, {"name": "camiseta azul feminino"}, {"name": "camiseta rosa feminino"} ]"""

    val httpProtocol = http.baseUrl("https://my-app-sleepy-mongoose-mt.cfapps.us10.hana.ondemand.com")
    val warm_up = scenario("Warm up")
      .during(10 seconds) {
          exec(http("warm_up")
            .post("/request")
            .body(StringBody(requestPayload)).asJson)
      }

    val scn = scenario("10 items - 50 users")
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
