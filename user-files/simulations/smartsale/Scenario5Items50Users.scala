package smartsale

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class Scenario5Items50Users extends Simulation {
    val users = 50
    val testDuration = 120
    val usersRampUpDuration = 10

    val requestPayload = """[{"name": "camiseta preta"},{"name": "camiseta branca"},{"name": "camiseta vermelha"},{"name": "camiseta azul"},{"name": "camiseta rosa"}]"""

    val httpProtocol = http.baseUrl("https://my-app-sleepy-mongoose-mt.cfapps.us10.hana.ondemand.com")
    val warm_up = scenario("Warm up")
      .during(10 seconds) {
          exec(http("warm_up")
            .post("/request")
            .body(StringBody(requestPayload)).asJson)
      }

    val scn = scenario("5 items - 50 users")
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
